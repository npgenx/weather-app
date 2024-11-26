
import { ModeToggle } from '@/components/ModeToggle';
import { SearchCombo } from '@/components/SearchCombo';
import { useWeatherContext } from '@/providers/weather-provider';

import { NavigationIcon } from 'lucide-react';


const Navbar = () => {
    const { city } = useWeatherContext(); 
    const { name, country } = city;

    return (
        <nav className='weather-navbar flex flex-wrap sticky h-20 w-auto justify-between mb-4 p-5 px-20 top-0 align-baseline'>
            <div className='left font-bold'>
                <NavigationIcon className='absolute -ml-6' size={20} />
                {name} ({country})
            </div>
            <SearchCombo />
            <div className='search-container flex items-center  w-full gap-2 sm:w-fit'>
                
                <ModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
