// axios will do the api call
import axios from 'axios';

console.log('PUT WEATHER MAP API KEY TO GET IT WORKING');
const API_KEY = "PUT API KEY HERE";
// this is recommended method , i.e. not to write string directly in 'type:' in
// the action and pass through the constant.
export const FETCH_WEATHER = 'FETCH_WEATHER';

// this is es6 syntax and is similar to :
// "http://api.openweathermap.org/data/2.5/forecast?APPID" + API_KEY
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

// api call should be of form acc. to api doc:
// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&APPID={API_KEY}

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},india`;
  // the api call is done by axios.get() method
  const request = axios.get(url);
  //console.log('action: ',request);
  //passing the request as the payload.
  //HERE WE GET A PROMISE AS RESPONSE FROM axios.get(url) and that promise is sent
  //to the payload. HERE comes the use of redux-promise (the middle ware that we used)
  // in our app(in src/index.js) so if the ACTION RETURNS A PROMISE THE MIDDLE WARE
  //STOPS THE ACTION and resolves the promise and GETS DATA FROM THE PROMISE AND PASS IT
  // FURTHER TO THE REDUCER. THIS IS THE USE OF redux-promise (middeleware).
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
