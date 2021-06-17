const createListElement = function (dayData) {
  const container = document.createElement("div");
  const dayPar = document.createElement("p");
  const rainPar = document.createElement("p");
  const rainIcon = document.createElement("span");
  const rainContainer = document.createElement("div");
  const maxTempPar = document.createElement("p");
  const minTempPar = document.createElement("p");
  const icon = document.createElement("img");

  dayPar.innerText = dayData.dayPar;
  rainPar.innerText = dayData.rainPar;
  rainIcon.innerText = "cloud_queue";
  rainIcon.classList.add("material-icons");
  maxTempPar.innerText = dayData.maxTempPar;
  minTempPar.innerText = dayData.minTempPar;
  icon.src = dayData.iconUrl;

  rainContainer.appendChild(rainIcon);
  rainContainer.appendChild(rainPar);
  container.appendChild(dayPar);
  container.appendChild(icon);
  container.appendChild(maxTempPar);
  container.appendChild(minTempPar);
  container.appendChild(rainContainer);

  return container;
};

const dailyWeather = function (data) {
  const container = document.createElement("div");
  container.id = "dailyWeather";

  data.forEach((day) => {
    const listElement = createListElement(day);
    container.appendChild(listElement);
  });

  return container;
};

export default dailyWeather;
