


function formatDate(timestamp) {
  let date= new Date(timestamp);
  let hours= date.getHours();
  if (hours < 10){
    hours= `0${hours}`;
  }
  let minutes= date.getMinutes();
  if (minutes < 10){
   minutes= `0${minutes}`;
  }
  let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day= days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}


function formatIcon(response) {
 let iconId = response.data.weather[0].id;
 if(iconId= 800){
   Image.querySelector(src/sun-try4.png);
 }
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement= document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement= document.querySelector("#wind");
  let dateElement=document.querySelector("#date");
  let iconElement=document.querySelector("#icon");
  temperatureElement.innerHTML= Math.round(response.data.main.temp);
  cityElement.innerHTML=response.data.name;
  descriptionElement.innerHTML= response.data.weather[0].main;
  humidityElement.innerHTML=response.data.main.humidity;
  windElement.innerHTML= Math.round(response.data.wind.speed);
  dateElement.innerHTML= formatDate(response.data.dt * 1000);
  iconElement.setAttribute("alt", response.data.weather[0].main);
  iconElement.setAttribute=formatIcon("src", response.data.weather[0].id);
}

let apiKey= "958b71e38c385a4f0896342006026aa2";
let city= "Los Angeles";
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);