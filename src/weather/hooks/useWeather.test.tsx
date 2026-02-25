import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useWeather } from "./useWeather";


describe('useWeather', () => {
    test('should render default values and methods', () => {
        const { result } = renderHook(() => useWeather());

        expect(result.current.weather).toBeNull();
        expect(result.current.isLoading).toBe(false);
        expect(result.current.error).toBeNull();
        expect(result.current.searchWeather).toBeDefined;
    });

    test('should render the weather of a city', async() => {
        const { result } = renderHook(() => useWeather());
        
        await act(async () => {
            await result.current.searchWeather('Beijing');
        });
        
        expect(result.current.weather?.city).toBe('Beijing');
    });
});