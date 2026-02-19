import { describe, test, expect } from 'vitest';
import {render} from '@testing-library/react';
import {WeatherApp} from './WeatherApp';

describe('WeatherApp', () => {
    test('Should render the component properly', () => {
        const { container } = render(<WeatherApp/>)
        expect(container).toMatchSnapshot();
    });
});