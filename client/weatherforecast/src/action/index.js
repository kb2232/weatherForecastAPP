import axios from 'axios';
const API_KEY = "d56df3e51251d1d1fe12d62617e2e602";
/*
MIDDLEWARES are preprocessors of an action. They process that incoming action and depend on conditions, the action might be allowed to go to the reducers
*/
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city)
{

  const url =  `https://samples.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);

  console.log("request = ",request);

  return {
    type:FETCH_WEATHER,
    payload:request
  }
}