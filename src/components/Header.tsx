'use client';

import React, { useEffect } from 'react';
import {ModeToggle} from '@/components/ModeToggle';
import {Github, NavigationIcon} from 'lucide-react';
import {SeachBox} from '@/components/SearchBox';
import {useWeatherContext, useWeatherContextUpdate} from '@/providers/weather-provider';
import {CityInfoProps} from '@/shared.types';
import {Button} from '@/components/ui/button';

const Header = () => {
    const { city } = useWeatherContext();
    const { setCity } = useWeatherContextUpdate();


    const getInitialCity = (info: CityInfoProps) => {
        const {latitude, longitude} = info;
        const tzone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const name = 'Your current Location';

        const test = {
            name,
            tzone,
            latitude,
            longitude,
        };

        if(latitude) setCity(test)
        console.log(' ++++_++_+_+_+_+_+_the day is over: ', test);
    };


    useEffect(() => {

        if (!navigator.geolocation) { 
            console.log(`|+|+|+ No geolocation features`);
            return
        }

       

        navigator.permissions.query({name: 'geolocation'}).then(result => {
            if (result.state === 'granted') {
                navigator.geolocation.getCurrentPosition(
                    position => {
                       getInitialCity(position?.coords)
                    }
                );
            
            } else if (result.state === 'prompt') {
                console.log(
                    'Please allow location access or enter a city in the search bar'
                );
            } else {
                console.log("Search for a location to get it's weather");
            }
        });

        navigator.geolocation.getCurrentPosition( res => getInitialCity( res), (err) => {console.log(`the error is :`, err)} )
      
    
    }, [])
    



    

    const getLocationLabel = (city: CityInfoProps) => {

        if (!city.name){return "Pick your location"}

        const {name, admin1, country} = city;

        const label = `${name} ${
            admin1 && admin1 != country && admin1 != name ? `, ${admin1}` : ''
        }  (${country})`;
        return label.trim();
    };


    return (
        <header className='flex justify-between py-4 gap-10 items-center h-auto sticky top-0  bg-background z-50'>
            <div className='location pl-5 flex font-bold '>
                <NavigationIcon size={15} className='absolute -ml-5 mt-1' />
                {getLocationLabel(city)}
            </div>
            <div className='grow'>
                <SeachBox />
            </div>
            <div className='flex items-center gap-4'>
                <ModeToggle />

                <Button variant='outline' size='icon'>
                    <a
                        href='https://github.com/npgenx/weather-app'
                        target='blank'
                        title='Github Source code'
                    >
                        <Github />
                    </a>
                </Button>
            </div>
        </header>
    );
};

export default Header;
