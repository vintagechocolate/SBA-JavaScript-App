const API_KEY = '14cd57c29966663b0e86e147ec9a974a';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';


export async function fetchWeatherData(city) {
    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        return {
            city: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            description: data.weather[0].description
        };
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}
