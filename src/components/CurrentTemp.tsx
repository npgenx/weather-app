'use client';

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
import {getWMOInfo} from '@/lib/constants';
import {getLocalTime} from '@/lib/utils';

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
        <Card className='col-span-4 lg:col-span-3 lg:row-span-2 text-center min-h-[600px] flex flex-col'>
            <CardHeader className='p-10'>
                <CardTitle className='text-9xl font-bold'>
                    {Math.round(currentWeather?.temperature_2m)}°F
                </CardTitle>
                <CardDescription className='text-lg'>
                    Feels like{' '}
                    {Math.round(currentWeather?.apparent_temperature)}°F
                </CardDescription>
                <p className='flex  font-bold p-4 justify-around'>
                    <span>
                        Low:
                        {Math.round(
                            Number(dailyWeather[0]?.temperature_2m_min)
                        )}
                        °F
                    </span>
                    <span>
                        High:
                        {Math.round(
                            Number(dailyWeather[0]?.temperature_2m_max)
                        )}
                        °F
                    </span>
                </p>
            </CardHeader>
            <CardContent className='flex flex-col justify-center p-0'>
                <Image
                    className='self-center dark:invert'
                    src={`./images/${
                        getWMOInfo(currentWeather.weather_code)?.icon
                    }d@2x.png`}
                    alt='weather'
                    width={180}
                    height={180}
                />
                <p className='font-bold p--0'>
                    {getWMOInfo(currentWeather.weather_code)?.text}
                </p>
            </CardContent>
            <CardFooter className=' flex flex-col'>
                <div className='flex p-4 justify-around gap-2 w-full text-xl font-semibold'>
                    <span className='flex gap-2 items-center '>
                        <SunriseIcon />
                        <p className='pt-1'>
                            {getLocalTime(dailyWeather[0]?.sunrise)}
                        </p>
                    </span>

                    <span className='flex gap-2 items-center'>
                        <SunsetIcon />
                        <p className='pt-1 '>
                            {getLocalTime(dailyWeather[0]?.sunset)}
                        </p>
                    </span>
                </div>
                <em>
                    sampled at: {getLocalTime(currentWeather?.time)}{' '}
                    {currentWeather.timezone_abbreviation}
                </em>
            </CardFooter>
        </Card>
    );
};

export default CurrentTemp;
