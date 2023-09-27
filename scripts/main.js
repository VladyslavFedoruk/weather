document.addEventListener('DOMContentLoaded', function () {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('.weather-city').textContent = data.name;
            document.querySelector('.weather-temp').textContent = data.main.temp;
            document.querySelector('.weather-pressure').textContent = data.main.pressure;
            document.querySelector('.weather-description').textContent = data.weather[0].description;
            document.querySelector('.weather-humidity').textContent = data.main.humidity;
            document.querySelector('.weather-speed').textContent = data.wind.speed;
            document.querySelector('.weather-deg').textContent = data.wind.deg;
            document.querySelector('.weather-img').src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        })
        .catch(error => console.error(error));
});
