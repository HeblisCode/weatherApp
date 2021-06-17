import "./index.css";
import Weather from "./modules/weather";
import cityForm from "./modules/cityForm";
import view from "./modules/view";
import settingStorage from "./modules/settingsStorage";
import pubsub from "./modules/pubsub";

Weather();
settingStorage();
view();
cityForm();

const button = document.querySelector("#tempScaleButton");
button.addEventListener("click", () => {
  pubsub.publish("toggleTempScale");
});
