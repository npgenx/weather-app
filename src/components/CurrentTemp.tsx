'use client';

import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {SunriseIcon, SunsetIcon} from 'lucide-react';

import {useWeatherContext} from '@/providers/weather-provider';
import {getWMOInfo} from '@/lib/constants';
import {getLocalTime} from '@/lib/utils';
import CardLoader from './CardLoader';

const CurrentTemp = () => {
    const {currentWeather, dailyWeather} = useWeatherContext();

    if (!currentWeather || !dailyWeather) return <CardLoader className={'col-span-4 lg:col-span-3 lg:row-span-2'} />;

    const iconSource = (currentWeather.weather_code == 0 && currentWeather.is_day == 0) ?
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtbW9vbiI+PHBhdGggZD0iTTEyIDNhNiA2IDAgMCAwIDkgOSA5IDkgMCAxIDEtOS05WiIvPjwvc3ZnPg=='
        : `./images/${getWMOInfo(currentWeather.weather_code)?.icon}${(currentWeather.is_day) ? 'd' : 'n'}@2x.png`;
    
    const weatherDescription = (currentWeather.weather_code == 0 && currentWeather.is_day == 0) ? "Clear" : getWMOInfo(currentWeather.weather_code)?.text
    
    
                    



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
                    className=' mydropshadow self-center'
                    // src={`./images/${
                    //     getWMOInfo(currentWeather.weather_code)?.icon
                    // }d@2x.png`}
                    src={iconSource}
                    alt='weather'
                    width={180}
                    height={180}
                />
                <p className='font-bold p--0'>{weatherDescription}</p>
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
