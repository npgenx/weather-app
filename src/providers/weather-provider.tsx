'use client';
import { createContext, useContext, ReactNode } from 'react';

export type contextProps = {
    children: ReactNode;
};


type WeatherContext = {
    a: string;
    b: string;
};

type WeatherContextUpdate = {
    c: string;
    d: string;
};

const WeatherContext = createContext<WeatherContext | null>(null);
const WeatherContextUpdate = createContext<WeatherContextUpdate | null>(null);

export const WeatherContextProvider = ({ children }: contextProps) => {
    const a = 'hello';
    const b = 'senor';
    const c = 'really';
    const d = 'there';

    return (
        <WeatherContext.Provider value={{ a, b }}>
            <WeatherContextUpdate.Provider value={{ c, d }}>
                {children}
            </WeatherContextUpdate.Provider>
        </WeatherContext.Provider>
    );
};

export const useWeatherContext = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error(
            'useThemeContext must be used within a ThemeContextProvider'
        );
    }
    return context;
};
export const useWeatherContextUpdate = () => {
    const context = useContext(WeatherContextUpdate);
    if (!context) {
        throw new Error(
            'useWeatherContextUpdate must be used within a useWeatherContextUpdateProvider'
        );
    }
    return context;
};
