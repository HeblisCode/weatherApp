import currentWeather from "./currentWeather";
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
  pubsub.subscribe("currentWeatherData", renderCurrent);
};

export default view;
