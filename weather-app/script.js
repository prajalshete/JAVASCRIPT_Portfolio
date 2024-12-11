const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather');
const weatherResult = document.getElementById('weather-result');

const apiKey = 'f1bd29681ad48b07957a3960de55278c'; // Replace with your OpenWeather API key

const getWeather = () => {
  const city = cityInput.value.trim();
  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404') {
          weatherResult.innerHTML = `<p>City not found!</p>`;
        } else {
          const { main, weather } = data;
          weatherResult.innerHTML = `
            <h3>${data.name}</h3>
            <p>${weather[0].description}</p>
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
          `;
        }
      })
      .catch(error => {
        weatherResult.innerHTML = `<p>Something went wrong. Please try again later.</p>`;
      });
  } else {
    weatherResult.innerHTML = `<p>Please enter a city.</p>`;
  }
};

getWeatherButton.addEventListener('click', getWeather);
