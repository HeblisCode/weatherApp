import currentWeather from "./currentWeather";
import dailyWeather from "./dailyWeather";
import hourlyWeather from "./hourlyWeather";
import pubsub from "./pubsub";

const view = function () {
  const content = document.querySelector("#content");
  const body = document.querySelector("body");
  const weatherStatus = {
    rain: ["Drizzle", "Rain", "Thunderstorm"],
    clear: ["Clear"],
    clouds: ["Clouds"],
    snow: ["Snow"],
  };

  function assignWeatherStatus(currentStatus, isDay) {
    const finalStatus = [];

    //assign the weather condition
    for (let prop in weatherStatus) {
      if (weatherStatus[prop].some((status) => status === currentStatus)) {
        finalStatus.push(prop);
      }
    }
    //assign night or day
    if (isDay) {
      finalStatus.push("Day");
    } else {
      finalStatus.push("Night");
    }
    return finalStatus.join("");
  }

  function render(data) {
    content.innerHTML = "";
    body.setAttribute(
      "class",
      assignWeatherStatus(data.current.mainWeather, data.current.isDay)
    );

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
