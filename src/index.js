import "./index.css";
import Weather from "./modules/weather";
import cityForm from "./modules/cityForm";
import view from "./modules/view";
import controller from "./modules/controller";

Weather();
view();
cityForm();
controller.init();
