import React from 'react'
import { ModeToggle } from '@/components/ModeToggle';
import { NavigationIcon } from 'lucide-react';
import { SeachBox } from '@/components/SearchBox';

const Header = () => {
  return (
      <header className='flex justify-between py-4 gap-10 items-center h-auto'>
          <div className='location pl-5 flex font-bold '>
              <NavigationIcon size={15} className='absolute -ml-5 mt-1' />
              Los Angeles, CA (US)
          </div>
          <div className='grow'>
              <SeachBox />
          </div>

          <ModeToggle />
      </header>
  );
}

export default Header