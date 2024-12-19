'use client';

import React, {useEffect} from 'react';
import {ModeToggle} from '@/components/ModeToggle';
import {Github, NavigationIcon} from 'lucide-react';
import {SeachBox} from '@/components/SearchBox';
import {
    useWeatherContext,
    useWeatherContextUpdate,
} from '@/providers/weather-provider';
import {CityInfoProps} from '@/shared.types';
import {Button} from '@/components/ui/button';

const Header = () => {
    const {city} = useWeatherContext();
    const {setCity} = useWeatherContextUpdate();

    useEffect(() => {
        if (!navigator.geolocation) {
            console.log(`|+|+|+ No geolocation features`);
            return;
        }

        const geoOptions = {
            enableHighAccuracy: false,
            timeout: 3000,
            // maximumAge: 0,
        };
        const getInitialCity = (info: {
            timestamp: number;
            coords: GeolocationCoordinates;
        }) => {
            const {latitude, longitude} = info.coords;
            const tzone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const name = 'Your current location';

            const test = {
                name,
                tzone,
                latitude,
                longitude,
            };

            if (latitude) setCity(test);
            console.log('set the browser location: ', test);
        };

        navigator.geolocation.getCurrentPosition(
            getInitialCity,
            err => {
                console.log(`the error is :`, err);
            },
            geoOptions
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getLocationLabel = (city: CityInfoProps) => {
        const {name, admin1, country} = city;

        if (!city.name) {
            return 'Pick your location';
        }
        const formattedCountry = !country ? '' : ` (${country})`;

        const label = `${name} ${
            admin1 && admin1 != country && admin1 != name ? `, ${admin1}` : ''
        } ${formattedCountry}`;
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
                        title='Github Source code'>
                        <Github />
                    </a>
                </Button>
            </div>
        </header>
    );
};

export default Header;
