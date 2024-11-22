document.addEventListener('DOMContentLoaded', () => {
    const forecasturl = `https://api.weatherapi.com/v1/forecast.json?key=4e85e18add184403a2704450242211&q=Timbuktu&days=3`;

    async function getWeatherForecast() {
        try {
            const response = await fetch(forecasturl);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                displayForecast(data);
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.error(error);
        }
    }

    function displayForecast(data) {
        const forecast = data.forecast.forecastday;
        forecast.forEach((day, index) => {
            const dayIndex = index + 1;
            const date = new Date(day.date + 'T00:00:00');
            const formatDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`
            document.querySelector(`#forecast-date${dayIndex}`).innerHTML = `Forecast date: ${formatDate}`;
            document.querySelector(`#forecast-hightemp${dayIndex}`).innerHTML = `High: ${day.day.maxtemp_f}°F`;
            document.querySelector(`#forecast-lowtemp${dayIndex}`).innerHTML = `Low: ${day.day.mintemp_f}°F`;
            document.querySelector(`#forecast-temp${dayIndex}`).innerHTML = `Temperature: ${day.day.avgtemp_f}°F`;
            document.querySelector(`#forecast-windspeed${dayIndex}`).innerHTML = `Wind Speed: ${day.day.maxwind_mph} MPH`;
        });
    }

    getWeatherForecast();
});
