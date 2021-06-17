import pubsub from "./pubsub";

const settingStorage = function () {
  const _settings = restoreSettings();

  function restoreSettings() {
    const savedSettings = JSON.parse(
      localStorage.getItem("heblisCodeWeatherAppSettings")
    );
    if (!savedSettings) {
      return {
        lastCity: "Venezia",
        tempScale: "celsius",
      };
    }
    return savedSettings;
  }

  function saveSettings() {
    localStorage.setItem(
      "heblisCodeWeatherAppSettings",
      JSON.stringify(_settings)
    );
  }

  function changeCity(cityName) {
    _settings.lastCity = cityName;
    saveSettings();
    pubsub.publish("settingsChanged", _settings);
  }

  function toggleTempScale() {
    if (_settings.tempScale === "celsius") {
      _settings.tempScale = "fahrenheit";
    } else {
      _settings.tempScale = "celsius";
    }
    saveSettings();
    pubsub.publish("settingsChanged", _settings);
  }

  pubsub.subscribe("toggleTempScale", toggleTempScale);
  pubsub.subscribe("getWeather", changeCity);

  pubsub.publish("settingsChanged", _settings);
};

export default settingStorage;
