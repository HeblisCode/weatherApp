import getApiKey from "../API_KEY";
import pubsub from "./pubsub";
import { getDateFromUnix, celsiusFromKelvin, fahrenFromKelvin } from "./lib";

const Weather = function () {
  const _API_KEY = getApiKey();
  const _tempScale = "fahrenheit";

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

    return {
      cityNamePar: currentData.cityName,
      datePar: date.day + " " + date.hour,
      iconUrl: `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`,
      tempPar: _tempConversion(currentData.temp),
      humPar: "Humidity: " + currentData.humidity + "%",
      rainPar: "Rain: 0mm",
      feelsLikePar: "Feels like: " + currentData.feels_like,
      windPar: "Wind speed: " + currentData.wind_speed,
      uvPar: "UV index: " + currentData.uvi,
      weatherPar: currentData.weather[0].description,
    };
  }

  function _parseHourlyWeatherData(hourlyData) {
    return hourlyData.map((hourData) => {
      const hourPar = getDateFromUnix(
        hourData.dt,
        hourlyData.timezone_offset
      ).hour;
      const iconUrl = `http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`;
      const tempPar = _tempConversion(hourData.temp);
      const rainPar = "Rain: " + "0mm";
      return {
        hourPar,
        iconUrl,
        tempPar,
        rainPar,
      };
    });
  }

  function _parseDailyWeatherData(dailyData) {
    return dailyData;
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
