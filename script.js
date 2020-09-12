let submitButton = document.getElementById("submitButton");

function checkWeather(){
let cityName = document.getElementById("cityName").value;
let degrees = document.getElementById("degrees");
fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=90b976abf86c484d25e97ae453af382e")
  .then(response => response.json())
  .then(data => degrees.innerHTML = Math.round(data.main.temp - 273.15) + "\xB0C but feels like " + 
        Math.round(data.main.feels_like - 273.15) + "\xB0C");
}
