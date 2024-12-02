'use client';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import Image from 'next/image';
import {useWeatherContext} from '@/providers/weather-provider';
import {getWMOInfo} from '@/lib/constants';
import { getLocalDayDate } from '@/lib/utils';

const DayForecast = ({
    time = 'none',
    temperature_2m_max = '105',
    temperature_2m_min = '-15',
    weather_code = '0',
}) => {
    return (
        <div className='daily-forecast py-4 flex flex-col justify-evenly border-b-2'>
            <p className='text-xl min-w-[3.5rem] flex gap-4 items-center justify-between'>
                <span className='text-base font-bold'>
                    {getLocalDayDate(time)}{' '}
                </span>
                <span className='text-base -ml-5'>
                    {getWMOInfo(weather_code)?.text}
                </span>
                <Image
                    src={`./images/${getWMOInfo(weather_code.toString())?.icon}d@2x.png`}
                    alt='weather'
                    width={50}
                    height={50}
                    className=''
                />
            </p>

            <div className='flex-1 flex items-center justify-between gap-4'>
                <p className='font-bold'>
                    {Math.round(Number(temperature_2m_min))}°F
                </p>
                <div className='air-quality flex-1 w-full h-2 rounded-lg'></div>
                <p className='font-bold'>
                    {Math.round(Number(temperature_2m_max))}°F
                </p>
            </div>
        </div>
    );
};

const SevenDayForecast = () => {
    const {dailyWeather} = useWeatherContext();

    if (!dailyWeather)
        return (
            <Card className='col-span-3 row-start-3 row-span-3 flex items-center justify-center min-h-[300px]'>
                <span className='loader' />
            </Card>
        );

    
    return (
        <Card className=' col-span-3 row-start-3 row-span-3 min-h-[300px]  overflow-y-scroll'>
            <CardHeader>
                <CardTitle>{7} Day Forecast </CardTitle>
            </CardHeader>
            <CardContent>
                {dailyWeather.slice(1).map((data, index) => {
                    return <DayForecast {...data} key={index} />;
                })}
            </CardContent>
        </Card>
    );
};

export default SevenDayForecast;
