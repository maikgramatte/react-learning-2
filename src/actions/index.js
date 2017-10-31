import axios from 'axios';

const API_KEY = "40647ef43373d383b6e8d5e664e5b239";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},de`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
