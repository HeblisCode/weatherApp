import pubsub from "./pubsub";

const controller = (function () {
  const _settings = _restoreSettings();
  const _tempScaleButton = document.querySelector("#tempScale");
  const _refreshButton = document.querySelector("#refresh");

  _tempScaleButton.addEventListener("click", () => {
    pubsub.publish("changeTempScale");
  });

  _refreshButton.addEventListener("click", () => {
    _askForWeather();
  });

  function _createSettings({ tempScale, lastCity, backupCity }) {
    const settings = {
      tempScale,
      backupCity,
      lastCity,
    };

    const proto = {
      changeLastCity(cityName) {
        this.backupCity = this.lastCity;
        this.lastCity = cityName;
        this.save();
      },
      toggleTempScale() {
        if (this.tempScale === "celsius") {
          this.tempScale = "fahrenheit";
        } else {
          this.tempScale = "celsius";
        }
        this.save();
      },
      save() {
        const item = {
          lastCity: this.lastCity,
          backupCity: this.backupCity,
          tempScale: this.tempScale,
        };
        localStorage.setItem("controllerObjectTest", JSON.stringify(item));
      },
      restoreBackupCity() {
        this.lastCity = this.backupCity;
        this.save();
      },
    };

    return Object.assign(Object.create(proto), settings);
  }

  function _restoreSettings() {
    const savedSettings = localStorage.getItem("controllerObjectTest");
    if (!savedSettings) {
      const newSettings = _createSettings({
        lastCity: "Venezia",
        backupCity: "Venezia",
        tempScale: "celsius",
      });
      newSettings.save();
      return newSettings;
    }
    return _createSettings(JSON.parse(savedSettings));
  }

  function _restoreAfterBadInput() {
    _settings.restoreBackupCity();
  }

  function _askForWeather() {
    pubsub.publish("getWeather", {
      cityName: _settings.lastCity,
      tempScale: _settings.tempScale,
    });
  }

  function _changeLastCity(cityName) {
    _settings.changeLastCity(cityName);
    _askForWeather();
  }

  function _changeTempScale() {
    _settings.toggleTempScale();
    _askForWeather();
  }

  function init() {
    _askForWeather();
  }

  pubsub.subscribe("changeLastCity", _changeLastCity);
  pubsub.subscribe("changeTempScale", _changeTempScale);
  pubsub.subscribe("cityNotFound", _restoreAfterBadInput);

  return {
    init,
  };
})();

export default controller;
