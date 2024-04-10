import { fetchWeatherData } from './apiService.js';
import { displayWeatherInfo } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', async () => {
        const searchInput = document.getElementById('searchInput').value.trim();
        if (searchInput !== '') {
            const weatherData = await fetchWeatherData(searchInput);
            displayWeatherInfo(weatherData);
        }
    });
});
