'use client';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {Droplets} from 'lucide-react';

import { useWeatherContext } from '@/providers/weather-provider';



const HumidityInfo = () => {

    const {currentWeather} = useWeatherContext();

    if (!currentWeather)
        return (
            <Card className='col-span-2 flex flex-col items-center justify-center '>
                <span className='loader' />
            </Card>
        );

    return (
        <Card className='col-span-2 flex flex-col'>
            <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                    <Droplets />
                    Humidity
                </CardTitle>
            </CardHeader>
            <CardContent className='flex grow items-center justify-center'>
                <p className='text-5xl font-bold'>{currentWeather?.relative_humidity_2m}%</p>
            </CardContent>
            <CardFooter>
                <em>{'Todo: heat index' }</em>
            </CardFooter>
        </Card>
    );
};

export default HumidityInfo;
