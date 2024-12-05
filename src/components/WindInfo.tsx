'use client';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Compass from '@/components/ui/compass';

import {WindIcon} from 'lucide-react';

import React from 'react';
import {useWeatherContext} from '@/providers/weather-provider';
import CardLoader from '@/components/CardLoader';

const WindInfo = () => {
    const { currentWeather } = useWeatherContext();
    

    const theClasses:string = 'col-span-2 md:col-span-2 flex flex-col min-h-[300px] place-content-between';

    if (!currentWeather)
        return <CardLoader className={theClasses} />;

    const {wind_direction_10m, wind_gusts_10m, wind_speed_10m} = currentWeather;
    return (
        <Card className={ theClasses}>
            <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                    <WindIcon /> Wind Info
                </CardTitle>
            </CardHeader>
            <CardContent className='flex justify-center gap-2'>
                <Compass speed={wind_speed_10m} deg={wind_direction_10m} />
            </CardContent>
            <CardFooter>
                Wind gust are:
                <span className='font-semibold pl-1'>{wind_gusts_10m} mph</span>
            </CardFooter>
        </Card>
    );
};

export default WindInfo;
