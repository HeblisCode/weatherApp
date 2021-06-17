import currentWeather from "./currentWeather";
import dailyWeather from "./dailyWeather";
import hourlyWeather from "./hourlyWeather";
import pubsub from "./pubsub";

const view = function () {
  const content = document.querySelector("#content");
  const body = document.querySelector("body");

  function render(data) {
    content.innerHTML = "";
    body.setAttribute("class", data.current.mainWeather);

    const current = currentWeather(data.current);
    const hourly = hourlyWeather(data.hourly);
    const daily = dailyWeather(data.daily);

    content.appendChild(current);
    content.appendChild(hourly);
    content.appendChild(daily);
  }

  pubsub.subscribe("weatherData", render);
};

export default view;
