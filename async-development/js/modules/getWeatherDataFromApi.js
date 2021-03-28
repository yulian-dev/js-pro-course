export async function getWeatherData(firstParam, secondParam) {
    const response = await fetch(`http://api.weatherstack.com/current?access_key=521b1a89bf347be2a638b8d595ca0ff2&query=${firstParam}, ${secondParam}`);
    return await response.json();
}