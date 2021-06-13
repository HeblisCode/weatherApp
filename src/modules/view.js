import currentWeather from "./currentWeather";
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
    const current = document.querySelector("#hourlyWeather");
    if (current) {
      current.remove();
    }
    content.appendChild(hourlyWeather(data));
  }

  pubsub.subscribe("currentWeatherData", renderCurrent);
  pubsub.subscribe("hourlyWeatherData", renderHourly);
};

export default view;
