const cityInputEl = document.querySelector('#city');
const countryInputEl = document.querySelector('#country');
const buttonEl = document.querySelector('#search');
const tempImageEl = document.querySelector('#tempImage');
const tempEl = document.querySelector('.temp');
const textEl = document.querySelector('.text');
const locationEl = document.querySelector('.location');
const humidityEl = document.querySelector('#humidity');
const precipEl = document.querySelector('#precip');
const windEl = document.querySelector('#wind');
const pressureEl = document.querySelector('#pressure');

const currentDate = new Date();

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '6565fe87cemshf0bb3d6416a713dp1b03e0jsn8cbbbe44050b',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

const getData = async () => {
    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityInputEl.value},${countryInputEl.value}`, options);
        const data = await response.json();
        setData(data);
    } catch (error) {
        console.error(error);
    }
}

const setData = (data) => {
    console.log(data);
    const temperature = Math.ceil(data.current.temp_c);
    const image = data.current.condition.icon;
    const description = data.current.condition.text;
    const humidity = data.current.humidity;
    const precip = data.current.precip_in;
    const pressure = data.current.pressure_in;
    const wind = data.current.wind_kph;
    const location = `${data.location.name}, ${data.location.country}`;
    const currentTime = currentDate.getHours();

    tempImageEl.src = image;
    tempEl.innerText = `${temperature}°C`;
    textEl.innerText = description;
    locationEl.innerText = location;
    humidityEl.innerText = humidity;
    precipEl.innerText = precip;
    pressureEl.innerText = pressure;
    windEl.innerText = wind;

}


buttonEl.addEventListener('click', getData);