const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = '//api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=3511dd803a4bfa6c4e1750702b6859c3';

async function apiFetch(aLink) {
    try {
        const response = await fetch(aLink);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            currentTemp.innerHTML = `${data.main.temp} &deg;C.`;
            captionDesc.textContent = `${data.weather[0].description}`;
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

apiFetch(url);