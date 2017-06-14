import fetchJsonp from 'fetch-jsonp';
const API_KEY = process.env.REACT_APP_OWA_KEY;
const OWA_URL = `http://api.openweathermap.org/data/2.5/weather?`;

let getForecast = {
    forCity(location) {
        let encodedLocation = encodeURIComponent(location);
        let url = `${OWA_URL}q=${encodedLocation}&appid=${API_KEY}`
        return fetchJsonp(url)
            .then(conditions => conditions)
            // .catch(response => console.error(response));  
    }
}

export default getForecast;
