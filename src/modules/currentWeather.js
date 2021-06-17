const currentWeather = function (data) {
  //HTML elements
  const container = document.createElement("div");
  const cityNamePar = document.createElement("h2");
  const datePar = document.createElement("p");
  const weatherPar = document.createElement("p");
  const tempPar = document.createElement("p");
  const humPar = document.createElement("p");
  const humIcon = document.createElement("span");
  const humContainer = document.createElement("div");
  const rainPar = document.createElement("p");
  const rainIcon = document.createElement("span");
  const rainContainer = document.createElement("div");
  const windPar = document.createElement("p");
  const windIcon = document.createElement("span");
  const windContainer = document.createElement("div");

  //Containers
  const bottomRow = document.createElement("div");
  const main = document.createElement("div");

  //Filling elements
  cityNamePar.innerText = data.cityNamePar;
  datePar.innerText = data.datePar;
  tempPar.innerText = data.tempPar;
  tempPar.id = "currentTemp";
  humPar.innerText = data.humPar;
  humIcon.innerText = "water_drop";
  humIcon.classList.add("material-icons");
  rainPar.innerText = data.rainPar;
  rainIcon.innerText = "cloud_queue";
  rainIcon.classList.add("material-icons");
  windPar.innerText = data.windPar;
  windIcon.innerText = "air";
  windIcon.classList.add("material-icons");
  weatherPar.innerText = data.weatherPar;
  container.id = "currentWeather";

  //Nesting

  humContainer.appendChild(humIcon);
  humContainer.appendChild(humPar);
  rainContainer.appendChild(rainIcon);
  rainContainer.appendChild(rainPar);
  windContainer.appendChild(windIcon);
  windContainer.appendChild(windPar);

  bottomRow.id = "currentTopRow";
  bottomRow.appendChild(humContainer);
  bottomRow.appendChild(rainContainer);
  bottomRow.appendChild(windContainer);

  main.id = "currentMain";
  main.appendChild(cityNamePar);
  main.appendChild(datePar);
  main.appendChild(tempPar);
  main.append(weatherPar);

  container.appendChild(main);
  container.appendChild(bottomRow);

  return container;
};

export default currentWeather;
