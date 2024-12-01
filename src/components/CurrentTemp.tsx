'use client';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc);
dayjs.extend(timezone);

import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card';
import {SunriseIcon, SunsetIcon} from 'lucide-react';

import {useWeatherContext} from '@/providers/weather-provider';
import { WMO } from '@/lib/constants';

const CTSkeleton = () => {
    return (
        <Card className='col-span-4 lg:col-span-3 lg:row-span-2  flex items-center justify-center '>
            <span className='loader' />
        </Card>
    );
};

const CurrentTemp = () => {
    const {currentWeather, dailyWeather} = useWeatherContext();

    if (!currentWeather || !dailyWeather) return <CTSkeleton />;
    return (
        <Card className='col-span-4 lg:col-span-3 lg:row-span-2 text-center '>
            <CardHeader className='pb-1'>
                <CardTitle className='text-7xl font-bold'>
                    {' '}
                    {Math.round(currentWeather?.temperature_2m)}°F
                </CardTitle>
                <CardDescription>
                    Feels like{' '}
                    {Math.round(currentWeather?.apparent_temperature)} °F
                </CardDescription>
                <p className='flex  font-bold pt-4 justify-around'>
                    <span>
                        Low:{Math.round(dailyWeather[0]?.temperature_2m_min)}°F
                    </span>
                    <span>
                        High:{Math.round(dailyWeather[0]?.temperature_2m_max)}°F
                    </span>
                </p>
            </CardHeader>
            <CardContent className='flex flex-col justify-center p-0'>
                <Image
                    className='self-center'
                    src={`./images/${
                        WMO[currentWeather.weather_code].icon
                    }d@2x.png`}
                    alt='weather'
                    width={150}
                    height={150}
                />{' '}
                <br />
                <p className='font-bold'>
                    {WMO[currentWeather.weather_code].text}
                </p>
            </CardContent>
            <CardFooter>
                <div className='flex pt-10 justify-around gap-2 w-full'>
                    <span className='flex gap-2 items-center'>
                        <SunriseIcon />
                        <p className='pt-1 '>
                            {dayjs(dailyWeather[0]?.sunrise).format('hh:mm a')}
                        </p>
                    </span>

                    <span className='flex gap-2 items-center'>
                        <SunsetIcon />
                        <p className='pt-1 '>{dayjs(dailyWeather[0]?.sunset).format('hh:mm a')}</p>
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
};

export default CurrentTemp;
