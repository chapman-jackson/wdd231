const temperature = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');
const tempHigh = document.querySelector('#temperature-high');
const tempLow = document.querySelector('#temperature-low')
const url = `https://api.openweathermap.org/data/2.5/weather?id=2449067&appid=ae58a08ae8c44d5d31feb88e8f786999&units=imperial`;
async function apiFetch(){
    try {
        const getResponse = await fetch(url);
        if (getResponse.ok) {
            const info = await getResponse.json();
            console.log(info);
            displayResults(info);
        } else {
            throw Error(await getResponse.text());
        }   
    } catch(error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(info) {
    const iconsrc = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    let desc = info.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    temperature.innerHTML = `${info.main.temp}&deg;F`;
    windSpeed.innerHTML = `${info.wind.speed} MPH`
    tempHigh.innerHTML = `${info.main.temp_max}&deg;F`;
    tempLow.innerHTML = `${info.main.temp_min}&deg;F`;
}