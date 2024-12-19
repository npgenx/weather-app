'use client'

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

const WeatherWindow = () => {
    const { city } = useWeatherContext();

    if(city.name != '') return <div>Pick a city</div>
    
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
