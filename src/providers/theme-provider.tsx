'use client';

import { useState, useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { WeatherContextProvider } from '@/providers/weather-provider';

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
            <WeatherContextProvider>{children}</WeatherContextProvider>
        </NextThemesProvider>
    );
};
