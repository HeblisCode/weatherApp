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
  const hour1 = createHourCard(data[0]);
  const hour2 = createHourCard(data[1]);
  const hour3 = createHourCard(data[2]);
  const hour4 = createHourCard(data[3]);
  const all48Hours = document.createElement("div");

  container.appendChild(hour1);
  container.appendChild(hour2);
  container.appendChild(hour3);
  container.appendChild(hour4);
  container.appendChild(all48Hours);

  container.id = "hourlyWeather";

  return container;
};

export default hourlyWeather;
