import { getDateFromUnix, celsiusFromKelvin, fahrenFromKelvin } from "./lib";

const currentWeather = function (data) {
  const container = document.createElement("div");
  const cityNamePar = document.createElement("h2");
  const datePar = document.createElement("p");
  const weatherIcon = document.createElement("img");
  const tempPar = document.createElement("p");
  const humPar = document.createElement("p");
  const rainPar = document.createElement("p");
  const UVPar = document.createElement("p");
  const weatherPar = document.createElement("p");

  const currentLeftGroup = document.createElement("div");
  const currentRightGroup = document.createElement("div");
  const currentCenterGroup = document.createElement("div");

  const date = getDateFromUnix(data.dt, data.time_offset);

  cityNamePar.innerText = data.city_name;
  datePar.innerText = date.day + ", " + date.hour;
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  tempPar.innerText = Math.floor(celsiusFromKelvin(data.temp)) + "°C";
  humPar.innerText = "Humidity: " + data.humidity + "%";
  rainPar.innerText = "Rain: " + (data.rain || "0") + "mm";
  UVPar.innerText = "UV index: " + data.uvi;
  weatherPar.innerText = data.weather[0].description;
  container.id = "currentWeather";

  currentLeftGroup.id = "currentLeftGroup";
  currentLeftGroup.appendChild(weatherIcon);
  currentLeftGroup.appendChild(tempPar);

  currentRightGroup.id = "currentRightGroup";
  currentRightGroup.appendChild(cityNamePar);
  currentRightGroup.appendChild(datePar);
  currentRightGroup.append(weatherPar);

  currentCenterGroup.id = "currentCenterGroup";
  currentCenterGroup.appendChild(humPar);
  currentCenterGroup.appendChild(rainPar);
  currentCenterGroup.appendChild(UVPar);

  container.appendChild(currentLeftGroup);
  container.appendChild(currentCenterGroup);
  container.appendChild(currentRightGroup);

  return container;
};

export default currentWeather;
