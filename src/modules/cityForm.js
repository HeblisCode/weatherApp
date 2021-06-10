import pubsub from "./pubsub";

const cityForm = function () {
  const searchButton = document.querySelector("#searchCityButton");
  const inputText = document.querySelector("#searchCityInput");
  const errorMessage = document.querySelector("#searchCityErrorMessage");
  const form = document.querySelector("#searchCityForm");

  function checkInputValidity() {
    if (inputText.validity.valid) {
      inputText.classList.remove("invalidInput");
      errorMessage.innerText = "";
    } else {
      inputText.classList.add("invalidInput");
      if (inputText.validity.valueMissing) {
        errorMessage.innerText = "You need to fill this field";
      } else {
        errorMessage.innerText = "City not found";
      }
    }
  }

  inputText.addEventListener("input", function () {
    inputText.setCustomValidity("");
    checkInputValidity();
  });

  searchButton.addEventListener("click", () => {
    if (inputText.validity.valid) {
      pubsub.publish("getWeather", inputText.value);
      form.reset();
    }
  });

  function cityNotFound() {
    inputText.setCustomValidity("City not found!");
    checkInputValidity();
  }

  pubsub.subscribe("cityNotFound", cityNotFound);
};

export default cityForm;
