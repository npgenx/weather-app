'use client';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import Image from 'next/image';
import {useWeatherContext} from '@/providers/weather-provider';
import {getWMOInfo} from '@/lib/constants';
import { getLocalDayDate } from '@/lib/utils';
import { DualRangeSlider } from '@/components/ui/dual-range-slider';
import {cn} from '@/lib/utils';

const DayForecast = ({
    time = 'none',
    temperature_2m_max = '105',
    temperature_2m_min = '-15',
    weather_code = '0',
    limits= [0,100]
}) => {

    const values = [
        Math.round(Number(temperature_2m_min)),
        Math.round(Number(temperature_2m_max))
    ];


    return (
        <div className='daily-forecast py-4 flex flex-col justify-evenly border-b-2 '>
            <p className='text-xl min-w-[3.5rem] flex gap-4 items-center justify-between'>
                <span className='text-base font-bold'>
                    {getLocalDayDate(time)}{' '}
                </span>
                <span className='text-base -ml-5'>
                    {getWMOInfo(weather_code)?.text}
                </span>
                <Image
                    src={`./images/${
                        getWMOInfo(weather_code.toString())?.icon
                    }d@2x.png`}
                    alt='weather'
                    width={50}
                    height={50}
                    className='mydropshadow'
                />
            </p>

            <div className='flex-1 flex items-center justify-between gap-4 pt-5'>
                <p className='font-bold'>{values[0]}°F</p>

                <DualRangeSlider
                    // label={value => <span>{value}°F</span>}
                    value={values}
                    disabled
                    className={cn('w-[60%]')}
                    min={limits[0]}
                    max={limits[1]}
                    step={1}
                />
                <p className='font-bold'>{values[1]}°F</p>
            </div>
        </div>
    );
};

const SevenDayForecast = () => {
    const {dailyWeather} = useWeatherContext();

    if (!dailyWeather)
        return (
            <Card className='col-span-3 row-start-3 row-span-3   flex items-center justify-center min-h-[300px]'>
                <span className='loader' />
            </Card>
        );
    
    const mina = Math.min(...dailyWeather.map(day => Number(day.temperature_2m_min)));
    const maxa = Math.max(...dailyWeather.map(day => Number(day.temperature_2m_max)));
    const min = Math.floor(mina);
    const max = Math.ceil(maxa)
    

    
    return (
        <Card className='col-span-4 lg:col-span-3 lg:row-start-3 lg:row-span-3 max-h-[620px] overflow-y-scroll'>
            <CardHeader>
                <CardTitle>{dailyWeather.length -1} Day Forecast </CardTitle>
            </CardHeader>
            <CardContent>
                {dailyWeather.slice(1).map((data, index) => {
                    return <DayForecast {...data} key={index} limits={[min, max]} />;
                })}
            </CardContent>
        </Card>
    );
};

export default SevenDayForecast;
