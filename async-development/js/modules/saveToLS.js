const WEATHER_KEY = 'weather';

export const saveToLocalstorage = (data) => {
    const dataFromLocalstorage = localStorage.getItem(WEATHER_KEY);
    if (dataFromLocalstorage) {
        const weather = JSON.parse(dataFromLocalstorage);
        const { location, current } = data;
        weather[location.name.toLowerCase()] = getWeatherObj(location, current);
        localStorage.setItem(WEATHER_KEY, JSON.stringify(weather));
    } else {
        const { location, current } = data;
        const weather = {[location.name.toLowerCase()]: getWeatherObj(location, current)};
        localStorage.setItem(WEATHER_KEY, JSON.stringify(weather));
    }
}

const getWeatherObj = (location, current) => {
    return {
        name: location.name,
        country: location.country,
        temperature: current.temperature,
        humidity: current.humidity,
        pressure: current.pressure,
        cloudCover: current.cloudcover,
        visibility: current.visibility,
        windSpeed: current.wind_speed,
        windDir: current.wind_dir,
        windDegree: current.wind_degree
    }
}