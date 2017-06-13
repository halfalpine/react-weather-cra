const API_KEY = process.env.REACT_APP_OWA_KEY;
const OWA_URL = `api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`;

console.log(API_KEY);

let getForecast = location => {
    const encodedLocation = encodeURIComponent(location);
    fetch(`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`)
        .then(forecast => forecast)
        .catch(response => console.error(response));
};

export default getForecast;