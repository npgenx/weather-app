'use client';
import { MonitorCog, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState } from 'react';


import { Button } from '@/components/ui/button';

export const ModeToggle = () => {
    const { setTheme, theme } = useTheme();
    const [display, setDisplay] = useState(0);
    
    const options = ['system', 'dark', 'light'];

    const switchTheme = () => {
        setDisplay(display === 2 ? 0 : display + 1);
        setTheme(options[display]);
    };

    const showHide = (name: string) => {
        return name === theme ? 'block' : 'hidden';
    };

    return (
        <Button variant='ghost' size='icon' onClick={switchTheme}>
            <Sun className={`h-5 w-5 ${showHide('light')}`} />
            <Moon className={`h-5 w-5 ${showHide('dark')}`} />
            <MonitorCog className={`h-5 w-5 ${showHide('system')}`} />
            <span className='sr-only'>Toggle theme</span>
        </Button>
    );
};
