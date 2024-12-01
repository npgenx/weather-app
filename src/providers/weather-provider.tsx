'use client';
import {CityInfoProps, IUVIndexInfo, IWeatherInfo} from '@/shared.types';
import {
    createContext,
    Dispatch,
    SetStateAction,
    ReactNode,
    useContext,
    useState,
    useEffect,
} from 'react';

import {getUVInfo, getWeatherInfo} from '@/actions';


interface WeatherContext  {
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
    const [weather, setWeather] = useState<IWeatherInfo | null>(null);
    const [uvdata, setUvdata] = useState<IUVIndexInfo | null>(null);

    const getRawLocationData = async (city: CityInfoProps) => {
        const {latitude, longitude, tzone} = city;
        const dataw = await getWeatherInfo(latitude, longitude, tzone);
        const datau = await getUVInfo(latitude, longitude, tzone);

        if (dataw) setWeather(dataw);
        if (datau) setUvdata(datau);
    };

    useEffect(() => {
        getRawLocationData(city);
    }, [city]);


 


    return (
        <WeatherContext.Provider
            value={{
                city,
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
