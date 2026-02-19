import {describe, test, expect} from 'vitest';
import Header from "./Header";
import { render, screen } from '@testing-library/react';

describe('Header', () => {

    test('Should render the title correctly', () => {
        render(<Header title="titulo"/>);
        const h1 = screen.getByRole('heading', {
            level: 1
        });
        expect(h1.innerHTML).toBe('titulo');
    });
});