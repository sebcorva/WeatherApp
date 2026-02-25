import axios from 'axios';

export const weatherApi = axios.create({
    baseURL: 'https://api.weatherapi.com/v1/current.json',
    params: {
        lang: 'es',
        api_key: import.meta.env.VITE_WEATHER_API_KEY,
    },
});

