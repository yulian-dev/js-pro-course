import {saveToLocalstorage} from "../saveToLS";
import {expect} from "chai";

const WEATHER_KEY = 'weather';
const data = {
    "request": {
        "type": "City",
        "query": "Minsk, Belarus",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Minsk",
        "country": "Belarus",
        "region": "Minsk",
        "lat": "53.900",
        "lon": "27.567",
        "timezone_id": "Europe/Minsk",
        "localtime": "2021-03-28 18:59",
        "localtime_epoch": 1616957940,
        "utc_offset": "3.0"
    },
    "current": {
        "observation_time": "03:59 PM",
        "temperature": 5,
        "weather_code": 296,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0017_cloudy_with_light_rain.png"
        ],
        "weather_descriptions": [
            "Light Rain"
        ],
        "wind_speed": 11,
        "wind_degree": 350,
        "wind_dir": "N",
        "pressure": 1024,
        "precip": 0,
        "humidity": 93,
        "cloudcover": 75,
        "feelslike": 1,
        "uv_index": 3,
        "visibility": 10,
        "is_day": "yes"
    }
}

describe('saveToLS module', () => {
    it('should save data to LS', () => {
        saveToLocalstorage(data);
        const weather = localStorage.getItem(WEATHER_KEY);
        const weatherFromLS = JSON.parse(weather);
        expect(weatherFromLS.minsk.name).to.equal('Minsk');
        expect(weatherFromLS.minsk.country).to.equal('Belarus');
        expect(weatherFromLS.minsk.cloudCover).to.not.be.null;
        expect(weatherFromLS.minsk.humidity).to.not.be.null;
    });
})