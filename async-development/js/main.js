import {getWeather} from "./modules/getWeather.js";

const form = document.forms[0];
const city = form.elements.city;
const country = form.elements.country;

const WEATHER_KEY = 'weather';
const myLocation = document.querySelector('#myLocation');
const history = document.querySelector('#history');
const modalBox = document.querySelector('#modalBox');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    await getWeather(city.value, country.value);
});

const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat, lon);
}

myLocation.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(showPosition)
});

history.addEventListener('click', () => {
    getModalBox();
    addCloseButtonListener();
});

const addCloseButtonListener = () => {
    const closeBtn = document.querySelector('#closeBtn');
    const modalSection = document.querySelector('.modal');
    closeBtn.addEventListener('click', () => {
        modalSection.remove();
    })
}

function getModalBox() {
    const dataFromLocalstorage = localStorage.getItem(WEATHER_KEY);
    const weathers = JSON.parse(dataFromLocalstorage);
    modalBox.innerHTML = `<div class="modal">
                            <div class="modalContent">
                                <span id="closeBtn" class="close">&times</span>
                                <table>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td><i class="fas fa-thermometer-three-quarters"></i></td>
                                        <td><i class="fas fa-tint"></i></td>
                                        <td><i class="fas fa-compress-arrows-alt"></i></td>
                                        <td><i class="fas fa-cloud"></i></td>
                                        <td><i class="far fa-eye"></i></td>
                                        <td><i class="fas fa-wind"></i></td>
                                        <td><i class="far fa-compass"></i></td>
                                        <td><i class="fas fa-location-arrow"></i></td>
                                    </tr>
                                    ${Object.values(weathers).map(weather =>
                                        `<tr>
                                            <td>${weather.name}, ${weather.country}</td>
                                            <td>${weather.temperature}</td>
                                            <td>${weather.humidity}%</td>
                                            <td>${weather.pressure}</td>
                                            <td>${weather.cloudCover}%</td>
                                            <td>${weather.visibility}</td>
                                            <td>${weather.windSpeed}km/h</td>
                                            <td>${weather.windDir}</td>
                                            <td>${weather.windDegree}</td>
                                        </tr>`).join('')}
                                </table>
                            </div>
                        </div>`
}