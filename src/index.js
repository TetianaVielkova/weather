

const weatherBlock = document.querySelector('#weather');
const formRef = document.querySelector('#search-form');

formRef.addEventListener('submit', onSearch);

let city = '';

function onSearch(e){
    e.preventDefault();
    weatherBlock.innerHTML = '';
    const city = e.currentTarget.elements.searchQuery.value;
    loadWeather(city);
}


async function loadWeather(city) {
    const API_KEY = '976c6009bfb619edc4108e35934174cd';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const response = await fetch(`${BASE_URL}?units=metric&q=${city}&appid=${API_KEY}`);
    const responseResult = await response.json();

if(response.ok) {
    getWeather(responseResult);
} 
} 
if(weatherBlock) {
    loadWeather();
}

function getWeather(data) {
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelslike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;


    const markup = `
    <div class="card">
        <div class="info">
            <div class="info__icon"><img src="http://api.openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}" ></div>
            <div class="info__wrapper" >
                <p class="info__item info__item--location">${location}</p>
                <p class="info__item info__item--temp">${temp}&deg;C</p>
                <p class="info__item info__item--status">${weatherStatus}</p>
                <p class="info__item">Feels like: ${feelslike}&deg;C</p>
            </div>
        </div>
    </div>`;
    weatherBlock.insertAdjacentHTML("beforeend", markup);
}