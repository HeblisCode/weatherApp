import getApiKey from "../API_KEY";
import pubsub from "./pubsub";
import { getDateFromUnix, celsiusFromKelvin, fahrenFromKelvin } from "./lib";

const Weather = function () {
  const _API_KEY = getApiKey();
  const _tempScale = "celsius";

  async function _getCoords(cityName) {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${_API_KEY}`,
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

  function _tempConversion(temp) {
    if (_tempScale === "celsius") {
      return Math.round(celsiusFromKelvin(temp)) + "°C";
    } else if (_tempScale === "fahrenheit") {
      return Math.round(fahrenFromKelvin(temp)) + "°F";
    }
  }

  function _parseCurrentWeatherData(currentData) {
    const date = getDateFromUnix(currentData.dt, currentData.timezone_offset);
    const rain = currentData.rain ? currentData.rain["1h"] : "0";
    const weatherDesc = currentData.weather[0].description;

    return {
      cityNamePar: currentData.cityName,
      datePar: date.day + " " + date.hour,
      iconUrl: `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`,
      tempPar: _tempConversion(currentData.temp),
      humPar: "Humidity: " + currentData.humidity + "%",
      rainPar: "Rain: " + rain + "mm",
      feelsLikePar: "Feels like: " + currentData.feels_like,
      windPar: "Wind speed: " + currentData.wind_speed,
      uvPar: "UV index: " + currentData.uvi,
      weatherPar: weatherDesc[0].toUpperCase() + weatherDesc.slice(1),
    };
  }

  function _parseHourlyWeatherData(hourlyData) {
    return hourlyData.map((hourData) => {
      const date = getDateFromUnix(hourData.dt, hourlyData.timezone_offset);
      const rain = hourData.rain ? hourData.rain["1h"] : "0";

      return {
        hourPar: date.hour,
        iconUrl: `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`,
        tempPar: _tempConversion(hourData.temp),
        rain: hourData.rain ? hourData.rain["1h"] : "0",
        rainPar: "Rain: " + rain + "mm",
      };
    });
  }

  function _parseDailyWeatherData(dailyData) {
    return dailyData.map((dayData) => {
      const rain = dayData.rain ? dayData.rain : 0;

      return {
        maxTempPar: _tempConversion(dayData.temp.max),
        minTempPar: _tempConversion(dayData.temp.min),
        iconUrl: `http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`,
        dayPar: getDateFromUnix(dayData.dt, dailyData.timezone_offset).day,
        rainPar: "Rain: " + rain + "mm",
      };
    });
  }

  async function publishWeatherData(cityName) {
    try {
      const data = await _getWeatherData(cityName);
      console.log(data);

      const currentData = Object.assign(data.current, {
        cityName: cityName,
        timezone_offset: data.timezone_offset,
      });
      const hourlyData = Object.assign(data.hourly, {
        timezone_offset: data.timezone_offset,
      });
      const dailyData = Object.assign(data.daily, {
        timezone_offset: data.timezone_offset,
      });

      pubsub.publish(
        "currentWeatherData",
        _parseCurrentWeatherData(currentData)
      );
      pubsub.publish("hourlyWeatherData", _parseHourlyWeatherData(hourlyData));
      pubsub.publish("dailyWeatherData", _parseDailyWeatherData(dailyData));
    } catch (error) {
      console.error(error);
      return;
    }
  }

  pubsub.subscribe("getWeather", publishWeatherData);
};

export default Weather;
