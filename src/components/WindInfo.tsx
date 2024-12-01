'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Compass from '@/components/ui/compass';

import { WindIcon } from 'lucide-react';

import React from 'react';
import {useWeatherContext} from '@/providers/weather-provider';
const WindInfo = () => {

    const { currentWeather } = useWeatherContext();

        if (!currentWeather)
            return (
                <Card className='col-span-2 center'>
                    <span className='loader' />
                </Card>
        );    
    
    const {wind_direction_10m,  wind_gusts_10m, wind_speed_10m} = currentWeather
    return (
        <Card className='col-span-2 center'>
            <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                    <WindIcon /> Wind Info
                </CardTitle>
            </CardHeader>
            <CardContent className='flex justify-center gap-2'>
                <Compass speed={wind_speed_10m} deg={wind_direction_10m} />
            </CardContent>
            <CardFooter>Wind gust are: {wind_gusts_10m} mph</CardFooter>
        </Card>
    );
};

export default WindInfo;
