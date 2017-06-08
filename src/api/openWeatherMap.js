const API_KEY = process.env.REACT_APP_WU_KEY;

const getWeather = (location) => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${API_KEY}`;

    fetch(url)
    .then(response => response.json())
    .then(JSON => console.log(JSON));
};

export default getWeather;
