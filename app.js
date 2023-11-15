// Function to get weather data by city name
function getWeatherByCity(city) {
    const apiKey = 'ed4fe249bd82487a9ce63532231311';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Log the weather data to the console
            console.log(`Weather in ${city}:`);
            console.log('Description:', data.weather[0].description);
            console.log('Temperature:', data.main.temp, '°C');
            console.log('Humidity:', data.main.humidity, '%');
            console.log('Wind Speed:', data.wind.speed, 'm/s');
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to get weather data by coordinates (latitude and longitude)
function getWeatherByCoordinates(latitude, longitude) {
    const apiKey = 'ed4fe249bd82487a9ce63532231311';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Log the weather data to the console
            console.log(`Weather at coordinates (${latitude}, ${longitude}):`);
            console.log('Description:', data.weather[0].description);
            console.log('Temperature:', data.main.temp, '°C');
            console.log('Humidity:', data.main.humidity, '%');
            console.log('Wind Speed:', data.wind.speed, 'm/s');
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to get weather data by city
function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value;

    // Call the function to get weather data by city
    getWeatherByCity(location);
}