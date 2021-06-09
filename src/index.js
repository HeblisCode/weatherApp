import "./index.css";
console.log("working");

async function test() {
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Vercelli&APPID=0762730ace1e0fb84186355a68037a6a",
    { mode: "cors" }
  );
  const data = await response.json();
  const coord = data.coord;
  const responseTwo = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=0762730ace1e0fb84186355a68037a6a`,
    { mode: "cors" }
  );
  console.log(await responseTwo.json());
  console.log(data);
}
test();
