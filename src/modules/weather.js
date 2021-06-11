import getApiKey from "../API_KEY";
import pubsub from "./pubsub";

const Weather = function () {
  const _API_KEY = getApiKey();

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

  async function publishWeatherData(cityName) {
    try {
      const data = await _getWeatherData(cityName);
      pubsub.publish(
        "currentWeatherData",
        Object.assign(data.current, { cityName })
      );
      pubsub.publish("dailyWeatherData", data.daily);
      pubsub.publish("hourlyWeatherData", data.hourly);
    } catch (error) {
      return;
    }
  }

  pubsub.subscribe("getWeather", publishWeatherData);
};

export default Weather;
