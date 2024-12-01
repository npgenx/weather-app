'use client';
import Image from 'next/image';
 import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import {Hourglass} from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from './ui/carousel';

import { useWeatherContext } from '@/providers/weather-provider';

import { getLocalDay, getLocalTime } from '@/lib/utils'
import {WMO} from '@/lib/constants';

import dayjs from 'dayjs';

const HourlyForecast = () => {
    const {currentWeather, hourlyWeather} = useWeatherContext();

    if (!currentWeather || !hourlyWeather)
        return (
            <Card className='col-span-4 flex items-center justify-center '>
                <span className='loader' />
            </Card>
        ); 

    const todaysHours = hourlyWeather.filter(
        ts => dayjs().isSame(ts.time, 'day') && dayjs().isBefore(ts.time, 'hour')
    );

    return (
        <Card className='col-span-4'>
            <CardHeader>
                <CardTitle className='flex content-baseline gap-1'>
                    <Hourglass size={15} />
                    Hourly forecast for {getLocalDay(todaysHours[0].time)}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Carousel className='tommy w-full max-w-sm place-self-center'>
                    <CarouselContent className='-ml-1'>
                        {todaysHours.map((hour, index) => (
                            <CarouselItem
                                key={index}
                                className='pl-1 md:basis-1/2 lg:basis-1/3'>
                                <div className='p-1'>
                                    <Card>
                                        <CardContent className='flex flex-col  items-center content-between justify-between h-44 pt-5'>
                                            <span className=''>
                                                {getLocalTime(hour.time)}
                                            </span>
                                            <Image
                                                className='self-center'
                                                src={`./images/${
                                                    WMO[hour.weather_code].icon
                                                }d@2x.png`}
                                                alt='weather'
                                                width={60}
                                                height={60}
                                            />
                                            <span>
                                                {Math.round(
                                                    hour.temperature_2m
                                                )}
                                                °F
                                            </span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </CardContent>
        </Card>
    );
};

export default HourlyForecast;
