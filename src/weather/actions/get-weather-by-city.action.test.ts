import { afterEach, describe, expect, test, vi } from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter';
import axios from "axios";
import { searchWeatherResponseMock } from '../../../test/mocks/weather.response.data';
import { getWeatherByCity } from "./get-weather-by-city.action";

describe('getWeatherByCity', () => {

    let mock = new AxiosMockAdapter(axios);

    afterEach(() => {
        mock.reset();
    });

    test('Should return the weather of a city', async() => {
        mock.onGet('https://api.weatherapi.com/v1/current.json').reply(200, searchWeatherResponseMock);

        const weather = await getWeatherByCity('Beijing');

        expect(weather?.city).toBe('Beijing');
        expect(weather?.country).toBe('China');
    });

    test('Should return null when city is empty', async() => {
        const weather = await getWeatherByCity('');

        expect(weather).toBeNull();
    });

    test('should handle error when the API return an error', async() => {
        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation( () => {});
        
        mock.onGet('https://api.weatherapi.com/v1/current.json').reply(400, {
            data: {
                message: 'Bad Request'
            }
        });

        const weather = await getWeatherByCity('Beijing');

        expect(weather).toBeNull();
        expect(consoleErrorSpy).toHaveBeenCalled();
    });
});