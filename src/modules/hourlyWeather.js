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

const hourlyWeather = function (data) {
  const container = document.createElement("div");
  const hourCards = document.createElement("div");

  hourCards.id = "hourCards";

  data.forEach((hourData) => {
    const hourCard = createHourCard(hourData);
    hourCard.classList.add("hourCard");
    hourCards.appendChild(hourCard);
  });

  container.appendChild(hourCards);

  container.id = "hourlyWeather";

  return container;
};

export default hourlyWeather;
