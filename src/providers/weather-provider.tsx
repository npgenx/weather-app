'use client';
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from 'react';



export type contextProps = {
    children: ReactNode;
};

export type CityInfoProps = {
    name: string;
    country: string;
    lat: number;
    lon: number;
};

type WeatherContext = {
    a: string;
    b: string;
    city: CityInfoProps;
};

type WeatherContextUpdate = {
    c: string;
    d: string;
    setCity: Dispatch<SetStateAction<CityInfoProps>>;
};
const WeatherContext = createContext<WeatherContext | null>(null);
const WeatherContextUpdate = createContext<WeatherContextUpdate | null>(null);

const initialCity = {
    name: 'Los Angeles',
    country: 'US',
    lat: 34.0536909,
    lon: -118.242766,
};

export const WeatherContextProvider = ({ children }: contextProps) => {
    const [city, setCity] = useState<CityInfoProps>(initialCity);

    const a = 'hello';
    const b = 'senor';
    const c = 'really';
    const d = 'there';

    return (
        <WeatherContext.Provider value={{ a, b, city }}>
            <WeatherContextUpdate.Provider value={{ c, d, setCity }}>
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
