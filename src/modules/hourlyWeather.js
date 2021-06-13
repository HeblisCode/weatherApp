const createHourCard = function (hourData) {
  const container = document.createElement("div");

  const hourPar = document.createElement("p");
  const icon = document.createElement("img");
  const tempPar = document.createElement("p");

  hourPar.innerText = hourData.hourPar;
  icon.src = hourData.iconUrl;
  tempPar.innerText = hourData.tempPar;

  container.appendChild(hourPar);
  container.appendChild(icon);
  container.appendChild(tempPar);

  return container;
};

const createHourListElem = function (hourData) {
  const container = createHourCard(hourData);

  const rainPar = document.createElement("p");
  rainPar.innerText = hourData.rainPar;
  container.appendChild(rainPar);

  return container;
};

const hourlyWeather = function (data) {
  const container = document.createElement("div");
  const hourCards = document.createElement("div");
  const hourList = document.createElement("div");
  const expandIcon = document.createElement("span");

  hourCards.id = "hourCards";
  hourList.classList.add("hourList");

  for (let i = 0; i < 4; i++) {
    const hourCard = createHourCard(data[i]);
    hourCard.classList.add("hourCard");
    hourCards.appendChild(hourCard);
  }

  data.forEach((hour) => {
    const hourListElem = createHourListElem(hour);
    hourListElem.classList.add("hourListElem");
    hourList.appendChild(hourListElem);
  });

  //Expand button
  expandIcon.classList.add("material-icons");
  expandIcon.classList.add("expandButton");
  expandIcon.innerText = "expand_more";
  expandIcon.addEventListener("click", () => {
    expandIcon.classList.toggle("expandRotated");
    hourList.classList.toggle("show");
  });

  container.appendChild(hourCards);
  container.appendChild(expandIcon);
  container.appendChild(hourList);

  container.id = "hourlyWeather";

  return container;
};

export default hourlyWeather;
