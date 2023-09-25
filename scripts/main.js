let url = 'https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

let data = {
    "coord": {
        "lon": 24.0232,
        "lat": 49.8383
    },
    "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
    }],
    "base": "stations",
    "main": {
        "temp": 15.35,
        "feels_like": 15.4,
        "temp_min": 15.35,
        "temp_max": 15.35,
        "pressure": 1027,
        "humidity": 94,
        "sea_level": 1027,
        "grnd_level": 993
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.11,
        "deg": 47,
        "gust": 8.43
    },
    "clouds": {
        "all": 7
    },
    "dt": 1695673441,
    "sys": {
        "country": "UA",
        "sunrise": 1695615236,
        "sunset": 1695658654
    },
    "timezone": 10800,
    "id": 702550,
    "name": "Lviv",
    "cod": 200
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.weather-city').textContent = data.name;
    document.querySelector('.weather-temp').textContent = data.main.temp;
    document.querySelector('.weather-pressure').textContent = data.main.pressure;
    document.querySelector('.weather-description').textContent = data.weather[0].description;
    document.querySelector('.weather-humidity').textContent = data.main.humidity;
    document.querySelector('.weather-speed').textContent = data.wind.speed;
    document.querySelector('.weather-deg').textContent = data.wind.deg;
    document.querySelector('.weather-img').src = `https://openweathermap.org/img/w/${data.weather.icon}.png`;
});