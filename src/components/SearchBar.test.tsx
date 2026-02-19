import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
    test('should change the input value when writing', () => {
        render(<SearchBar placeHolder="Buscar.." buttonText="Buscar" onSearch={() => {}}/>);

        const input = screen.getByPlaceholderText('Buscar..') as HTMLInputElement;
        fireEvent.change(input, {target: {value: 'Santiago'}});
        expect(input.value).toBe('Santiago');
    });

    test('should call the onSearch function with the new value and clean the value after the submit ', () => {
        const onSearchMock = vi.fn(); //crea una funcion simulada que no ejecutara nada
        render(<SearchBar placeHolder="Buscar..." buttonText="Buscar" onSearch={onSearchMock} />);
        
        const input = screen.getByPlaceholderText('Buscar...') as HTMLInputElement;
        const form = screen.getByRole('form'); 

        fireEvent.change(input, { target: { value: '  Santiago  ' } });
        fireEvent.submit(form);

        expect(onSearchMock).toHaveBeenCalled();
        expect(onSearchMock).toHaveBeenCalledWith('Santiago');
        expect(input.value).toBe('');
    });

    test('should not call the onSearch fuction when the value has one or less character', () => {
        const onSearchMock = vi.fn();
        render(<SearchBar placeHolder="Buscar..." buttonText="Buscar" onSearch={onSearchMock} />);

        const input = screen.getByPlaceholderText('Buscar...') as HTMLInputElement;
        const form = screen.getByRole('form'); 

        fireEvent.change(input, { target: {value: 'a'}});
        fireEvent.submit(form);

        expect(onSearchMock).not.toHaveBeenCalled();
    })
})