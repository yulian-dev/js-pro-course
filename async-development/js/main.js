const form = document.forms[0];
const city = form.elements.city;
const country = form.elements.country;

const WEATHER_KEY = 'weather';
const weatherTable = document.querySelector('#weatherTable');
const myLocation = document.querySelector('#myLocation');
const history = document.querySelector('#history');
const modalBox = document.querySelector('#modalBox');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    await getWeather(city.value, country.value);
});

myLocation.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(showPosition)
})

history.addEventListener('click', () => {
    getModalBox();
    addCloseButtonListener();
})

async function getWeather(firstParam, secondParam) {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=521b1a89bf347be2a638b8d595ca0ff2&query=${firstParam}, ${secondParam}`);
    const data = await response.json();
    const {current, location} = data;

    weatherTable.innerHTML = `<img class="weatherImg" src="${current.weather_icons[0]}" alt="Weather">
                                <h1>${current.temperature}°C</h1>
                                <h4>${location.name}, ${location.country}</h4>
                                <table>
                                    <tr>
                                        <td>Time: ${current.observation_time}</td>
                                        <td>Feels like: ${current.feelslike}°C</td>
                                        <td>Today is ${current.weather_descriptions[0].toLowerCase()}</td>
                                    </tr>
                                    <tr>
                                        <td>Wind: ${current.wind_dir}</td>
                                        <td>Speed: ${current.wind_speed} km/h</td>
                                        <td>Pressure: ${current.pressure} MB</td>
                                    </tr>
                                </table>`;
    saveToLocalstorage(data);
}

function getModalBox() {
    const dataFromLocalstorage = localStorage.getItem(WEATHER_KEY);
    const weathers = JSON.parse(dataFromLocalstorage);
    modalBox.innerHTML = `<div class="modal">
                            <div class="modalContent">
                                <span id="closeBtn" class="close">&times</span>
                                <table>
                                    <tr>
                                        <td></td>
                                        <td><i class="fas fa-thermometer-three-quarters"></i></td>
                                        <td><i class="fas fa-tint"></i></td>
                                        <td><i class="fas fa-compress-arrows-alt"></i></td>
                                        <td><i class="fas fa-cloud"></i></td>
                                        <td><i class="far fa-eye"></i></td>
                                        <td><i class="fas fa-wind"></i></td>
                                        <td><i class="far fa-compass"></i></td>
                                        <td><i class="fas fa-location-arrow"></i></td>
                                    </tr>
                                    ${weathers.map(weather =>
                                        `<tr>
                                            <td>${weather.location.name}, ${weather.location.country}</td>
                                            <td>${weather.current.temperature}</td>
                                            <td>${weather.current.humidity}%</td>
                                            <td>${weather.current.pressure}</td>
                                            <td>${weather.current.cloudcover}%</td>
                                            <td>${weather.current.visibility}</td>
                                            <td>${weather.current.wind_speed}km/h</td>
                                            <td>${weather.current.wind_dir}</td>
                                            <td>${weather.current.wind_degree}</td>
                                        </tr>`).join('')}
                                </table>
                            </div>
                        </div>`
}

const addCloseButtonListener = () => {
    const closeBtn = document.querySelector('#closeBtn');
    const modalSection = document.querySelector('.modal');
    closeBtn.addEventListener('click', () => {
        modalSection.remove();
    })
}

const saveToLocalstorage = (data) => {
    const dataFromLocalstorage = localStorage.getItem(WEATHER_KEY);
    if (dataFromLocalstorage) {
        const weatherArr = JSON.parse(dataFromLocalstorage);
        weatherArr.push(data);
        localStorage.setItem(WEATHER_KEY, JSON.stringify(weatherArr));
    } else {
        const weatherArr = [];
        weatherArr.push(data);
        localStorage.setItem(WEATHER_KEY, JSON.stringify(weatherArr));
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon);
}
