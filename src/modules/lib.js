import { fromUnixTime, format } from "date-fns";

function getDateFromUnix(unixTime, offset) {
  const dateFromUnix = fromUnixTime(unixTime + offset);
  const UTCDate = new Date(
    dateFromUnix.getUTCFullYear(),
    dateFromUnix.getUTCMonth(),
    dateFromUnix.getUTCDate(),
    dateFromUnix.getUTCHours(),
    dateFromUnix.getUTCMinutes(),
    dateFromUnix.getUTCSeconds()
  );
  const day = format(UTCDate, "EEEE");
  const hour = format(UTCDate, "HH:mm");
  return {
    day,
    hour,
  };
}

function celsiusFromKelvin(temp) {
  return temp - 273.15;
}

function fahrenFromKelvin(temp) {
  return ((temp - 273.15) * 9) / 5 + 32;
}

function tempConversion(temp, scale) {
  if (scale === "celsius") {
    return { value: Math.round(celsiusFromKelvin(temp)), scale: "°C" };
  } else {
    return { value: Math.round(fahrenFromKelvin(temp)), scale: "°F" };
  }
}

export { getDateFromUnix, tempConversion };
