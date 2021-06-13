const currentWeather = function (data) {
  //HTML elements
  const container = document.createElement("div");
  const cityNamePar = document.createElement("h2");
  const datePar = document.createElement("p");
  const weatherIcon = document.createElement("img");
  const tempPar = document.createElement("p");
  const humPar = document.createElement("p");
  const rainPar = document.createElement("p");
  const UVPar = document.createElement("p");
  const weatherPar = document.createElement("p");
  const feelsLikePar = document.createElement("p");
  const windPar = document.createElement("p");
  const expandIcon = document.createElement("span");

  //Containers
  const currentRightGroup = document.createElement("div");
  const currentLeftGroup = document.createElement("div");
  const hiddenGroup = document.createElement("div");

  //Filling elements
  cityNamePar.innerText = data.cityNamePar;
  datePar.innerText = data.datePar;
  weatherIcon.src = data.iconUrl;
  tempPar.innerText = data.tempPar;
  humPar.innerText = data.humPar;
  rainPar.innerText = data.rainPar;
  UVPar.innerText = data.uvPar;
  feelsLikePar.innerText = data.feelsLikePar;
  windPar.innerText = data.windPar;
  weatherPar.innerText = data.weatherPar;
  container.id = "currentWeather";

  //Expand button
  expandIcon.classList.add("material-icons");
  expandIcon.classList.add("expandButton");
  expandIcon.innerText = "expand_more";
  expandIcon.addEventListener("click", () => {
    expandIcon.classList.toggle("expandRotated");
    hiddenGroup.classList.toggle("show");
  });

  //Nesting
  currentRightGroup.id = "currentRightGroup";
  currentRightGroup.appendChild(weatherIcon);
  currentRightGroup.appendChild(tempPar);

  currentLeftGroup.id = "currentLeftGroup";
  currentLeftGroup.appendChild(cityNamePar);
  currentLeftGroup.appendChild(datePar);
  currentLeftGroup.append(weatherPar);
  currentLeftGroup.appendChild(rainPar);

  hiddenGroup.classList.add("hiddenGroup");
  hiddenGroup.appendChild(humPar);
  hiddenGroup.appendChild(UVPar);
  hiddenGroup.appendChild(feelsLikePar);
  hiddenGroup.appendChild(windPar);

  container.appendChild(currentLeftGroup);
  container.appendChild(currentRightGroup);
  container.appendChild(expandIcon);
  container.appendChild(hiddenGroup);

  return container;
};

export default currentWeather;
