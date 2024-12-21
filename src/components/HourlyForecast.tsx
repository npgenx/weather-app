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
} from '@/components/ui/carousel';

import {useWeatherContext} from '@/providers/weather-provider';

import {getLocalDay, getLocalTime} from '@/lib/utils';
import {getWMOInfo} from '@/lib/constants';

import dayjs from 'dayjs';



const HourlyForecast = () => {
    const {currentWeather, hourlyWeather, dailyWeather} = useWeatherContext();

    if (!currentWeather || !hourlyWeather)
        return (
            <Card className='col-span-4 flex items-center justify-center '>
                <span className='loader' />
            </Card>
        );

    const { time } = currentWeather;
    const solarInfo = (dailyWeather) ? dailyWeather[0] : {};
    const { sunrise ='0', sunset='9999999' } = {...solarInfo};

    const isNight = (time:string) => {return (dayjs(time).isBefore(sunrise) || dayjs(time).isAfter(sunset))}

    const todaysHours = hourlyWeather.filter(
        ts =>
            dayjs(time).isBefore(ts.time, 'hour')
    );

    const totalToShow =
        todaysHours.filter(ts => dayjs(time).isSame(ts.time, 'day')).length < 6
            ? 12
            : todaysHours.filter(ts => dayjs(time).isSame(ts.time, 'day'))
                .length;
    
    todaysHours.splice(totalToShow);

    const iconSource = (hour: { time: string; weather_code: string }) => {
        const test = isNight(hour.time);
        return `./images/${getWMOInfo(currentWeather.weather_code)?.icon}${
                  test ? 'n' : 'd'
              }@2x.png`;
    };
        

    return (
        <Card className='col-span-4 min-h-[300px]'>
            <CardHeader>
                <CardTitle className='flex items-center gap-1'>
                    <Hourglass size={15} />
                    Hourly forecast for {getLocalDay(todaysHours[0]?.time)}
                    <em className='font-medium text-sm'>
                        ({currentWeather.timezone_abbreviation})
                    </em>
                </CardTitle>
            </CardHeader>
            <CardContent className='p-0'>
                <Carousel
                    className='place-self-center m-auto p-10 h-fit w-5/6'>
                    <CarouselContent className='-ml-1 p-0'>
                        {todaysHours.map((hour, index) => (
                            <CarouselItem
                                key={index}
                                className='pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/3 p-0 m-0'>
                                <div className='p-1'>
                                    <Card>
                                        <CardContent className='flex flex-col  items-center content-between justify-between h-48 pt-5'>
                                            <span className='text-sm'>
                                                {getLocalTime(hour.time)}
                                            </span>
                                            <span className='text-sm'>
                                                {(!dayjs(time).isSame(hour.time, 'day')) ? getLocalDay(hour.time): ''}
                                            </span>
                                            <Image
                                                className='mydropshadow self-center'
                                                src={iconSource(hour)}
                                                alt='weather'
                                                width={60}
                                                height={60}
                                            />
                                            <span>
                                                {Math.round(
                                                    Number(hour.temperature_2m)
                                                )}{' '}
                                                °F
                                            </span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='ml-2' />
                    <CarouselNext className='mr-4' />
                </Carousel>
            </CardContent>
        </Card>
    );
};

export default HourlyForecast;
