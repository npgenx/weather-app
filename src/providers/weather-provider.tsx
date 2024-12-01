'use client';
import {
    CityInfoProps,
} from '@/shared.types';
import {
    createContext,
    Dispatch,
    SetStateAction,
    ReactNode,
    useContext,
    useState,
} from 'react';

type WeatherContext = {
    city: CityInfoProps;
};

type WeatherContextUpdate = {
    setCity: Dispatch<SetStateAction<CityInfoProps>>;
};
const WeatherContext = createContext<WeatherContext | null>(null);
const WeatherContextUpdate = createContext<WeatherContextUpdate | null>(null);

const initialCity = {
    name: 'Los Angeles',
    country: 'US',
    latitude: 34.0536909,
    longitude: -118.242766,
    tzone: 'America/Los_Angeles',
};

export type contextProps = {
    children: ReactNode;
};

export const WeatherContextProvider = ({children}: contextProps) => {
    const [city, setCity] = useState<CityInfoProps>(initialCity);


    return (
        <WeatherContext.Provider
            value={{
                city
            }}>
            <WeatherContextUpdate.Provider value={{setCity}}>
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
