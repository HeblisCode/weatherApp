import currentWeather from "./currentWeather";
import dailyWeather from "./dailyWeather";
import hourlyWeather from "./hourlyWeather";
import pubsub from "./pubsub";

const view = function () {
  const content = document.querySelector("#content");

  function renderCurrent(data) {
    const current = document.querySelector("#currentWeather");
    if (current) {
      current.remove();
    }
    content.appendChild(currentWeather(data));
  }

  function renderHourly(data) {
    const hourly = document.querySelector("#hourlyWeather");
    if (hourly) {
      hourly.remove();
    }
    content.appendChild(hourlyWeather(data));
  }

  function renderDaily(data) {
    const daily = document.querySelector("#dailyWeather");
    if (daily) {
      daily.remove();
    }
    content.appendChild(dailyWeather(data));
  }

  pubsub.subscribe("currentWeatherData", renderCurrent);
  pubsub.subscribe("hourlyWeatherData", renderHourly);
  pubsub.subscribe("dailyWeatherData", renderDaily);
};

export default view;
