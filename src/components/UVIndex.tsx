'use client';

import React from 'react';
import {Slider} from './ui/slider';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { SunIcon } from 'lucide-react';

import {useWeatherContext} from '@/providers/weather-provider';

const UVIndex = () => {

    const { uvData } = useWeatherContext();

    const uvText = (aqi: number) => {
        
        if (aqi >= 11) return `Extreme (${aqi})`;
        if (aqi >= 8) return ` Very High (${aqi})`;
        if (aqi >= 6) return ` Very High (${aqi})`;
        if (aqi >= 3) return ` Very High (${aqi})`;
        return `Low (${aqi})`;
    }

    
    if(!uvData) return (
        <Card className='col-span-2 flex flex-col items-center justify-center '>
            <span className='loader' />
        </Card>
    );

     
    return (
        <Card className='col-span-2 flex flex-col'>
            <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                    <SunIcon />
                    UV Index
                </CardTitle>
                <CardDescription>{uvText(uvData?.uv_index)}</CardDescription>
            </CardHeader>
            <CardContent className='grow content-center'>
                <Slider
                    value={[uvData?.uv_index]}
                    min={0}
                    max={11}
                    className='uvindex  h-3 '
                    disabled
                />
            </CardContent>
            <CardFooter>
                <em className='place-item-end font-thin text-sm'>
                    More info:
                    <a
                        href='https://www.epa.gov/sunsafety/uv-index-scale-0'
                        target='blank'
                        className='text-blue-700 '>
                        {' '}
                        UV Index Scale
                    </a>
                </em>
            </CardFooter>
        </Card>
    );
};

export default UVIndex;
