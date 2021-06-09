const Weather = (function () {
  const _API_KEY = "0762730ace1e0fb84186355a68037a6a";

  async function _getCoords(cityName) {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${_API_KEY}`,
      { mode: "cors" }
    );
    const coordsData = await response.json();
    return coordsData;
  }

  async function _getWeatherData(lat, lon) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${_API_KEY}`,
      { mode: "cors" }
    );
    return await response.json();
  }

  return {
    _getCoords,
    _getWeatherData,
  };
})();

export default Weather;
