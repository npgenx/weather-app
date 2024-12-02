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

const WeatherWindow = () => {
    return (
        <main className='bg-green-200  grid grid-cols-5 xl:grid-cols-11 gap-4 sm:bg-red-100 md:bg-orange-100 lg:bg-pink-100 xl:bg-zinc-300 2xl:bg-blue-200  p-4'>
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
