const API_KEY = "1e4afdc2b25039da3a422e9d01cb1a18";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      const temp = Math.round(data.main.temp); //소수점 두자리라서 반올림
      weather.innerText = `${temp} ºC , ${data.weather[0].main} at`;
    });
}

function onGeoFail() {
  alert("Can't find your location.");
  weather.classList.add(HIDDEN_CLASSNAME);
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);
