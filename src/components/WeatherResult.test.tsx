import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WeatherResult from './WeatherResult';

const mockWeather = {
    city: 'Santiago',
    country: 'Chile',
    temp: 27,
    last_update_date: '19 de febrero',
    last_update_time: '10:00',
    is_day: 0
}

describe('WeatherResult', () => {
    test('Should render props of weather propertly', () => {
        render(<WeatherResult weather={mockWeather}/>);

        expect(screen.getByText('Santiago')).toBeDefined();
        expect(screen.getByText('Chile')).toBeDefined();
        expect(screen.getByText(27)).toBeDefined();
        expect(screen.getByText(/19 de febrero/i)).toBeDefined();
        expect(screen.getByText(/10:00/i)).toBeDefined();
    });

    test('should render day class when is_day is true', () => {

    });

    test('should render night class when is_day is false', () => {

    });
});