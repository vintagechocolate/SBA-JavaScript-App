export function displayWeatherInfo(weatherData) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    if (weatherData) {
        weatherInfoDiv.innerHTML = `
            <h2>${weatherData.city}</h2>
            <p>Temperature: ${weatherData.temperature}°C</p>
            <p>Humidity: ${weatherData.humidity}%</p>
            <p>Wind Speed: ${weatherData.windSpeed} m/s</p>
            <p>Description: ${weatherData.description}</p>
        `; 
    } else {
        weatherInfoDiv.innerHTML = '<p>No weather data found. Please try again.</p>';
    }
}
