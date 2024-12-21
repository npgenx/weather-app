'use client';

import AirQuality from '@/components/AirQuality';
import CurrentTemp from '@/components/CurrentTemp';
import HourlyForecast from '@/components/HourlyForecast';
import HumidityInfo from '@/components/HumidityInfo';
import Pressure from '@/components/Pressure';
import SevenDayForecast from '@/components/SevenDayForecast';
import UVIndex from '@/components/UVIndex';
import WeatherMap from '@/components/WeatherMap';
import WindInfo from '@/components/WindInfo';
import React from 'react';
import {useWeatherContext} from '@/providers/weather-provider';

const StartScreen = () => {
    return (
        <div className='mx-auto my-10 h-3/4'>
            <h1 className='text-2xl font-semibold mb-20'>
                Welcome to another Weather app
            </h1>
            <section className='flex flex-col items-center justify-center'>
                <ul>
                    <li>
                        Please enter a location above to see the weather for that area.
                    </li>
                </ul>
                <span className='loader relative self-center mt-52' />
            </section>
        </div>
    );
};

const WeatherWindow = () => {
    const {city} = useWeatherContext();

    if (!city?.name) return <StartScreen />;

    return (
        <main className=' grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-11 gap-4 p-4'>
            <CurrentTemp />
            <HourlyForecast />
            <SevenDayForecast />
            <AirQuality />
            <WindInfo />
            <HumidityInfo />
            <UVIndex />
            <Pressure />
            <WeatherMap />
        </main>
    );
};

export default WeatherWindow;
