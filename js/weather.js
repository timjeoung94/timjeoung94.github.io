const API_KEY = "3a78e3baeb5f5a950ebc8047a7506fbd";

function onGeoOk (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelectorAll("#weather span:first-child");
        const city = document.querySelectorAll("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; 

    });
}

function onGeoError() {
    alert("Can't find your location. No weather for you haha")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);