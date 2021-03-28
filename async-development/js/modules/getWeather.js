import {saveToLocalstorage} from "./saveToLS.js";

const weatherTable = document.querySelector('#weatherTable');

export async function getWeather(firstParam, secondParam) {
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
                                        <td>Today is ${current.weather_descriptions[0]}</td>
                                    </tr>
                                    <tr>
                                        <td>Wind: ${current.wind_dir}</td>
                                        <td>Speed: ${current.wind_speed} km/h</td>
                                        <td>Pressure: ${current.pressure} MB</td>
                                    </tr>
                                </table>`;
    saveToLocalstorage(data);
}