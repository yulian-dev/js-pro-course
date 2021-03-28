import {getWeatherData} from "../getWeatherDataFromApi";
import {expect} from "chai";

describe('getWeatherDataFromApi module', () => {
    it('should return weather by city and country', () => {
        getWeatherData('Minsk', 'Belarus').then(data => {
            expect(data.location.name).to.equal('Minsk');
            expect(data.location.country).to.equal('Belarus');
            expect(data.location.lat).to.equal('53.900');
            expect(data.location.lon).to.equal('27.567');
        });
    });
    it('should return weather by latitude and longitude', () => {
        getWeatherData('53.900', '27.567').then(data => {
            expect(data.location.name).to.equal('Minsk');
            expect(data.location.country).to.equal('Belarus');
        });
    });
    it('should return weather by city', () => {
        getWeatherData('Minsk').then(data => {
            expect(data.location.name).to.equal('Minsk');
            expect(data.location.country).to.equal('Belarus');
            expect(data.location.utc_offset).to.equal('3.0');
        });
    })
})