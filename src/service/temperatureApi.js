import axios from 'axios';

const URL = 'https://my-json-server.typicode.com/leoaugustoreis/temperatureApi';

export const getTemperature = () => {
    return axios.get(URL + '/temperatura-atual');
}

export const getAlarmTemperature = () => {
    return axios.get(URL + '/temperatura-alarmes');
}

export const getTemperatureHistory = () => {
    return axios.get(URL + '/temperatura-historico');
}