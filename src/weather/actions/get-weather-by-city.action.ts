import axios from 'axios';
import type { Weather, WeatherAPIResponse } from '../interfaces/weather.interface';

export const getWeatherByCity = async(city: string): Promise<Weather> => {

    const {data} = await axios.get<WeatherAPIResponse>('https://api.weatherapi.com/v1/current.json', {
        params: {
            key: import.meta.env.VITE_WEATHER_API_KEY,
            q: city,
            aqi: 'no',
            lang: 'es'
        }
    });

    const formatDate = new Date(data.current.last_updated);

    const time = formatDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    const date = formatDate.toLocaleDateString('es-ES', {day: 'numeric', month: 'long'});

    return {
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        last_update_date: date,
        last_update_time: time,
        is_day: data.current.is_day,
    };
};