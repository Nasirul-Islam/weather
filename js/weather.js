// `https://api.openweathermap.org/data/2.5/weather?q=${dhaka}&appid=2a1761151c9d1a64dedcb73cae676687`

// `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=2a1761151c9d1a64dedcb73cae676687`

const searchButton = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    inputField.value = '';
    error.textContent = '';
    if (searchText == '') {
        console.log('aga input dan')
        const error = document.getElementById('error')
        // error.classList.remove('d-none')
        const div = document.createElement('div')
        div.innerHTML = `
            <h1 class="text-light">Please type the name of the capital City</h1>
        `;
        error.appendChild(div)
        weather.textContent = '';
    }
    // console.log(searchText);
    else {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=2a1761151c9d1a64dedcb73cae676687`)
            .then(res => res.json())
            .then(data => displayWeather(data))
        // error.textContent = '';
    }
}
const displayWeather = capitalCity => {
    console.log(capitalCity);
    const weather = document.getElementById('weather');
    weather.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
        <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
        <h1 class="text-light">${capitalCity.name}</h1>
        <h2 class="text-light">Humidity ${capitalCity.main.humidity}, Temperature ${parseInt(capitalCity.main.temp - 273.15)}&deg;C</h2>
        <p class="text-light fs-4">${capitalCity.weather[0].main} </p>
    `;
    weather.appendChild(div)
}






