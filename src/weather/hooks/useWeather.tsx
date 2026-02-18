import {useRef, useState} from 'react';
import type { Weather } from '../interfaces/weather.interface';
import { getWeatherByCity } from '../actions/get-weather-by-city.action';

export const useWeather = () => {
    const [weather, setWeather] = useState<Weather | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const weatherCache = useRef<Record<string, Weather>>({});

    const searchWeather = async (query: string) => {
        const city = query.toLowerCase().trim();
        if (!city) return;

        setError(null);

        if (weatherCache.current[city]) {
            setWeather(weatherCache.current[city]);
            return;
        }
        
        setIsLoading(true);

        try {
            const data = await getWeatherByCity(city);
            
            weatherCache.current[city] = data;
            setWeather(data);

        } catch (err) {
            setError('No se pudo encontrar la ciudad');
            setWeather(null);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        weather,
        isLoading,
        error,
        searchWeather,
    };
};