'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gauge } from 'lucide-react';

import {useWeatherContext} from '@/providers/weather-provider';

const Pressure = () => {

    const { currentWeather } = useWeatherContext();
    
            if (!currentWeather)
                return (
                    <Card className='col-span-2 flex flex-col center items-center justify-center '>
                        <span className='loader' />
                    </Card>
                );   
    return (
        <Card className='col-span-2 flex flex-col'>
            <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                    <Gauge />
                    Pressure
                </CardTitle>
            </CardHeader>
            <CardContent className='flex grow items-center justify-center'>
                <p className='text-4xl font-bold'>{currentWeather?.surface_pressure} hPa</p>
            </CardContent>
        </Card>
    );
};

export default Pressure;
