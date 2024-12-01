'use client';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import Image from 'next/image';
import {useWeatherContext} from '@/providers/weather-provider';
import {WMO} from '@/lib/constants';
import { getLocalDayDate } from '@/lib/utils';

const DayForecast = ({
    time,
    temperature_2m_max = 105,
    temperature_2m_min = -15,
    weather_code = '04',
}) => {
    return (
        <div className='daily-forevast py-4 flex flex-col justify-evenly border-b-2'>
            <p className='text-xl min-w-[3.5rem] flex gap-4 items-center justify-between'>
                <span className=''>{getLocalDayDate(time)} </span>
                <Image
                    src={`./images/${WMO[weather_code].icon}d@2x.png`}
                    alt='weather'
                    width={50}
                    height={50}
                    className=''
                />
            </p>

            <div className='flex-1 flex items-center justify-between gap-4'>
                <p className='font-bold'>{Math.round(temperature_2m_min)}°F</p>
                <div className='air-quality flex-1 w-full h-2 rounded-lg'></div>
                <p className='font-bold'>{Math.round(temperature_2m_max)}°F</p>
            </div>
        </div>
    );
};

const SevenDayForecast = () => {
    const {dailyWeather} = useWeatherContext();

    if (!dailyWeather)
        return (
            <Card className='col-span-3 row-start-3 row-span-3 flex items-center justify-center '>
                <span className='loader' />
            </Card>
        );

    
    return (
        <Card className=' col-span-3 row-start-3 row-span-3'>
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
