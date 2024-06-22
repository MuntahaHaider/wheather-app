
const apiKey = 'a0438a4dd83c3d0e95edb6623bc8568a'; 
function Weather() {
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('temperature').textContent = `${data.main.temp}°C`;
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('humidity').textContent = `${data.main.humidity}%`;
            document.getElementById('windSpeed').textContent = `${data.wind.speed} km/h`;
            document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

document.querySelector('.search button').addEventListener('click', Weather);
