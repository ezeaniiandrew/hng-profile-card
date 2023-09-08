const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Teusday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();

document.querySelector("#current-day").textContent = daysOfTheWeek[date.getDay()];

document.querySelector("#utc-time").textContent = date.getUTCMilliseconds();
