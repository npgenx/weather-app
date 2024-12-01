'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import {WeatherContextProvider} from '@/providers/weather-provider';

export const ThemeProvider = ({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <NextThemesProvider {...props}>
            <WeatherContextProvider>{children}</WeatherContextProvider>{' '}
        </NextThemesProvider>
    );
};
