import getApiKey from "../API_KEY";
import pubsub from "./pubsub";
import { getDateFromUnix, tempConversion } from "./lib";

const Weather = function () {
  const _API_KEY = getApiKey();

  async function _getCoords(cityName) {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${_API_KEY}`,
      { mode: "cors" }
    );
    const coordsData = await response.json();
    return coordsData;
  }

  async function _getWeatherData(cityName) {
    try {
      const coords = await _getCoords(cityName);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords[0].lat}&exclude=minutely,alerts&lon=${coords[0].lon}&appid=${_API_KEY}`,
        { mode: "cors" }
      );
      return await response.json();
    } catch (error) {
      pubsub.publish("cityNotFound");
    }
  }

  function _parseCurrentWeatherData(currentData) {
    const date = getDateFromUnix(currentData.dt, currentData.timezone_offset);
    const rain = currentData.rain ? currentData.rain["1h"].toFixed(2) : "0.00";
    const weatherDesc = currentData.weather[0].description;
    const temp = tempConversion(currentData.temp, currentData.tempScale);
    const isDay =
      currentData.dt > currentData.sunrise &&
      currentData.dt < currentData.sunset;

    return {
      isDay: isDay,
      mainWeather: currentData.weather[0].main,
      cityNamePar:
        currentData.cityName[0].toUpperCase() + currentData.cityName.slice(1),
      datePar: date.day + " " + date.hour,
      iconUrl: `https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`,
      tempPar: temp.value + temp.scale,
      humPar: currentData.humidity + "%",
      rainPar: rain + "mm",
      windPar: currentData.wind_speed + "m/s",
      weatherPar: weatherDesc[0].toUpperCase() + weatherDesc.slice(1),
    };
  }

  function _parseHourlyWeatherData(hourlyData) {
    return hourlyData.map((hourData, i) => {
      let date = getDateFromUnix(hourData.dt, hourlyData.timezone_offset).hour;
      const temp = tempConversion(hourData.temp, hourlyData.tempScale);
      const rain = hourData.rain ? hourData.rain["1h"] : "0.00";
      if (i === 0) {
        date = "Now";
      }
      return {
        hourPar: date,
        iconUrl: `https://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`,
        tempPar: temp.value + temp.scale,
        rainPar: "Rain: " + rain + "mm",
      };
    });
  }

  function _parseDailyWeatherData(dailyData) {
    return dailyData.map((dayData, i) => {
      const rain = dayData.rain ? dayData.rain : "0.00";
      const minTemp = tempConversion(dayData.temp.min, dailyData.tempScale);
      const maxTemp = tempConversion(dayData.temp.max, dailyData.tempScale);
      let date = getDateFromUnix(dayData.dt, dailyData.timezone_offset).day;
      if (i === 0) {
        date = "Today";
      }

      return {
        maxTempPar: maxTemp.value + maxTemp.scale,
        minTempPar: minTemp.value + minTemp.scale,
        iconUrl: `https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`,
        dayPar: date,
        rainPar: rain + "mm",
      };
    });
  }

  async function publishWeatherData({ cityName, tempScale }) {
    try {
      const data = await _getWeatherData(cityName);

      const currentData = Object.assign(data.current, {
        tempScale: tempScale,
        cityName: cityName,
        timezone_offset: data.timezone_offset,
      });
      const hourlyData = Object.assign(data.hourly, {
        tempScale: tempScale,
        timezone_offset: data.timezone_offset,
      });
      const dailyData = Object.assign(data.daily, {
        tempScale: tempScale,
        timezone_offset: data.timezone_offset,
      });

      pubsub.publish("weatherData", {
        current: _parseCurrentWeatherData(currentData),
        hourly: _parseHourlyWeatherData(hourlyData),
        daily: _parseDailyWeatherData(dailyData),
      });
    } catch (error) {
      console.error(error);
      return;
    }
  }

  pubsub.subscribe("getWeather", publishWeatherData);
};

export default Weather;
