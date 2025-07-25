const currentTemp = document.querySelector('#current-temp');
const weatherCondition = document.querySelector('#weather-condition');
const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const sunriseTime = document.querySelector('#sunrise-time');
const sunsetTime = document.querySelector('#sunset-time');
const weatherIcon = document.querySelector('#weather-icon');
const myUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=18.644&lon=-74.114&units=metric&appid=3511dd803a4bfa6c4e1750702b6859c3';

async function apiFetch(aLink) {
    try {
        const response = await fetch(aLink);
        if (response.ok) {
            const data = await response.json();
            currentTemp.innerHTML = `<span id='temp'>${data.main.temp}</span> &deg;C`;
            weatherCondition.textContent = `${data.weather[0].description}`;
            highTemp.innerHTML = `High: ${data.main.temp_max} &deg;C`;
            lowTemp.innerHTML = `Low: ${data.main.temp_min} &deg;C`;
            humidity.innerHTML = `Humidity: ${data.main.humidity}`;
            //------------------extract sunrise and sunset time-----------------------
            const srTime = new Date(data.sys.sunrise * 1000);
            const sunriseHours = String(srTime.getUTCHours()).padStart(2, '0');
            const sunriseMinutes = String(srTime.getUTCMinutes()).padStart(2, '0');
            const sunriseTimeF = `${sunriseHours}:${sunriseMinutes}`;
            //-------------------------- sunset time --------------------------------
            const ssTime = new Date(data.sys.sunset * 1000);
            const sunsetHours = String(ssTime.getUTCHours()).padStart(2, '0');
            const sunsetMinutes = String(ssTime.getUTCMinutes()).padStart(2, '0');
            const sunsetTimeF = `${sunsetHours}:${sunsetMinutes}`;
            //----------------Sunrise and Sunset ---------------------------------------
            sunriseTime.innerHTML = `Sunrise: ${sunriseTimeF}`;
            sunsetTime.innerHTML = `Sunset: ${sunsetTimeF}`;

            weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            weatherIcon.setAttribute('alt',data.weather[0].description);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(myUrl);

//==================== Weather Forecast ==========================
const aToday = document.querySelector('#today');
const wednesday = document.querySelector('#wednesday');
const thursday = document.querySelector('#thursday');
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=18.644&lon=-74.114&units=metric&appid=3511dd803a4bfa6c4e1750702b6859c3';

async function apiFetchForecast(apiLink) {
    try {
        const response = await fetch(apiLink);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            aToday.innerHTML = `Today: ${data.list[2].main.temp} &deg;C`;
            wednesday.innerHTML = `Wednesday: ${data.list[10].main.temp} &deg;C`;
            thursday.innerHTML = `Thursday: ${data.list[18].main.temp} &deg;C`;
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchForecast(urlForecast);