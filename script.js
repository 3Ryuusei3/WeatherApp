const apiKey = "a87f3cf8c801db4acc1a0fe34714d3e9";

var search = "Guadalajara";
var cityForm = document.getElementById("city-form");
var cityInput = document.getElementById("city-input");

var cityName = document.getElementById("city-name");
var description = document.getElementById("description");
var temperature = document.getElementById("temperature");
var maxTemperature = document.getElementById("max-temperature");
var minTemperature = document.getElementById("min-temperature");
var weatherIcon = document.getElementById("weather-icon");

cityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  search = cityInput.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      cityName.innerHTML = data.name;
      description.innerHTML = data.weather[0].description;
      temperature.innerHTML = Math.floor(data.main.temp);
      maxTemperature.innerHTML = Math.floor(data.main.temp_max);
      minTemperature.innerHTML = Math.floor(data.main.temp_min);
      // Image
      let iconLink = data.weather[0].icon;
      weatherIcon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${iconLink}@2x.png`
      );
    });
});
