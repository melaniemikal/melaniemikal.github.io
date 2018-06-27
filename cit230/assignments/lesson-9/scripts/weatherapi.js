//connection to the API

let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=cc76db4df8c1fa10ee0ab54de74186f5';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
   let weatherData = JSON.parse(weatherRequest.response);
   document.getElementById("current-temp").innerHTML = weatherData.main.temp;
   let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
   document.getElementById("weatherimage").src = imagesrc;
}

