'use client';

import React from 'react'
import { ModeToggle } from '@/components/ModeToggle';
import { NavigationIcon } from 'lucide-react';
import { SeachBox } from '@/components/SearchBox';
import {useWeatherContext} from '@/providers/weather-provider';



const Header = () => {

const {city} = useWeatherContext();
    
console.log(city)

  return (
      <header className='flex justify-between py-4 gap-10 items-center h-auto'>
          <div className='location pl-5 flex font-bold '>
              <NavigationIcon size={15} className='absolute -ml-5 mt-1' />
              {city.name} ({city?.country})
          </div>
          <div className='grow'>
              <SeachBox />
          </div>

          <ModeToggle />
      </header>
  );
}

export default Header