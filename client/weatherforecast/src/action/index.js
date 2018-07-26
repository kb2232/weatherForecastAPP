import axios from 'axios';
const API_KEY = "d56df3e51251d1d1fe12d62617e2e602";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
/*
MIDDLEWARES are preprocessors of an action. They process that incoming action and depend on conditions, the action might be allowed to go to the reducers
*/
export const FETCH_WEATHER = "FETCH_WEATHER";
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}