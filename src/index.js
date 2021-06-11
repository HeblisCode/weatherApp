import "./index.css";
import Weather from "./modules/weather";
import cityForm from "./modules/cityForm";
import pubsub from "./modules/pubsub";
import view from "./modules/view";

Weather();
cityForm();
view();
pubsub.subscribe("currentWeatherData", console.log);
