import "./index.css";
import Weather from "./modules/weather";
import cityForm from "./modules/cityForm";
import pubsub from "./modules/pubsub";

Weather();
cityForm();
pubsub.subscribe("weatherDataFetched", console.log);
