const API_KEY = "1f3c9180f7a3608ce000e15fb3140cdc";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector(".temperature");
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");
      temperature.innerText = `${Math.floor(data.main.temp)}°C`;
      weather.innerText = `${data.weather[0].main}`;
      city.innerText = `${data.name}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
