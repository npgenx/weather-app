'use client';
import {
    CityInfoProps,
    ICurrentWeather,
    IDailyWeather,
    IHourlyWeather,
    IAirPollution,
    IWeatherInfo
} from '@/shared.types';
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
import { IAPCurrent } from '../shared.types';



export interface WeatherContext {
    city: CityInfoProps;
    currentWeather?: ICurrentWeather;
    dailyWeather?: Array<IDailyWeather>;
    hourlyWeather?: Array<IHourlyWeather>;
    uvData?: IAPCurrent;
}

export type WeatherContextUpdate = {
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
    const [rawUVData, setRawUVData] = useState<IAirPollution | null>(null);

    const getRawLocationData = async (city: CityInfoProps) => {
        const {latitude, longitude, tzone} = city;
        const dataw = await getWeatherInfo(latitude, longitude, tzone);
        const datau = await getUVInfo(latitude, longitude, tzone);

        if (dataw) setWeather(dataw);
        if (datau) setRawUVData(datau);
    };

    useEffect(() => {
        getRawLocationData(city);
    }, [city]);

    const currentWeather = weather?.current;
    let dailyWeather: Array<IDailyWeather> = [
        {
            time: 'now',
            weather_code: 0,
            temperature_2m_max: 200,
            temperature_2m_min: -200,
            sunset: '0000',
            sunrise: '0000'
        },
    ];

    let hourlyWeather: Array<IHourlyWeather> = [
        {
            time: 'now',
            temperature_2m: 0,
            weather_code: 0,
        },
    ];
        let uvData: IAPCurrent = {
            time: '',
            interval: -9999,
            us_aqi: -9999,
            pm10: -9999,
            pm2_5: -9999,
            carbon_monoxide: -9999,
            nitrogen_dioxide: -9999,
            sulphur_dioxide: -9999,
            ozone: -9999,
            uv_index: -9999,
            uv_index_clear_sky: -9999,
        };



    if (weather) {
        for (let i = 0; i < weather.hourly?.time?.length; i++) {
            hourlyWeather[i] = {
                time: weather.hourly.time[i].toString(),
                temperature_2m: parseFloat(weather.hourly.temperature_2m[i]),
                weather_code: parseFloat(weather?.hourly?.weather_code[i]),
            };
        }

        for (let i = 0; i < weather.hourly?.time?.length; i++) {
            dailyWeather[i] = {
                time: weather.daily.time[i],
                weather_code: parseFloat(weather.daily.weather_code[i]),
                temperature_2m_max: parseFloat(
                    weather.daily.temperature_2m_max[i]
                ),
                temperature_2m_min: parseFloat(
                    weather.daily.temperature_2m_min[i]
                ),
                sunrise: weather.daily.sunrise[i],
                sunset: weather.daily.sunset[i],
            };
        }
    }

    if (rawUVData) { 
        uvData = rawUVData.current;
    }

    
    return (
        <WeatherContext.Provider
            value={{
                city,
                currentWeather,
                dailyWeather,
                hourlyWeather,
                uvData
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
