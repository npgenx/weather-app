'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {Flame} from 'lucide-react';
import {Slider} from './ui/slider';
import {useWeatherContext} from '@/providers/weather-provider';

const AirQuality = () => {
    const {uvData} = useWeatherContext();

    const uvText = (uv_index: number) => {
        if (uv_index > 300) return `Hazardous (${uv_index})`;
        if (uv_index > 200) return `Very Unhealthy (${uv_index})`;
        if (uv_index > 150) return `Unhealthy (${uv_index})`;
        if (uv_index > 100)
            return `Unhealthy for sensitive people (${uv_index})`;
        if (uv_index > 50) return ` Moderate (${uv_index})`;
        return `Good (${uv_index})`;
    };

    if (!uvData)
        return (
            <Card className='col-span-2 flex flex-col items-center justify-center '>
                <span className='loader' />
            </Card>
        );
    
    const {
        us_aqi,
        carbon_monoxide,
        pm10,
        pm2_5,
        nitrogen_dioxide,
        sulphur_dioxide,
        ozone,
    } = uvData;

    return (
        <Card className='col-span-4 row-start-2 col-start-4 min-h-[300px] flex flex-col '>
            <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                    <Flame />
                    Air Quality
                </CardTitle>
                <CardDescription>{uvText(us_aqi)}</CardDescription>
            </CardHeader>
            <CardContent className='grow content-center'>
                <Slider
                    value={[Number(us_aqi)]}
                    min={0}
                    max={350}
                    className='air-quality h-3'
                    disabled
                />
            </CardContent>
            <CardFooter>
                <span>
                    SO<sub>2</sub>: <b>{sulphur_dioxide}</b>
                </span>
                <span>
                    NO<sub>2</sub>: <b>{nitrogen_dioxide}</b>
                </span>
                <span>
                    PM<sub>10</sub>: <b>{pm10}</b>
                </span>
                <span>
                    PM<sub>2.5</sub>: <b>{pm2_5}</b>
                </span>
                <span>
                    O<sub>3</sub>: <b>{ozone}</b>
                </span>
                <span>
                    CO: <b>{carbon_monoxide}</b>
                </span>

                <em className='place-item-end font-thin text-sm'>
                    Pollutant concentration in μg/m<sup>3</sup>
                </em>
            </CardFooter>
        </Card>
    );
};

export default AirQuality;
