'use client';

import { ModeToggle } from '@/components/ModeToggle';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useWeatherContext } from '@/providers/weather-provider';

export default function Home() {
    const { theme } = useTheme();
    const { a } = useWeatherContext();
    return (
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
                <ModeToggle />
                The value is : {a}
                <div>
                    <Image
                        className={theme === 'dark' ? 'invert': ':light:invert'}
                        src='./images/01n@2x.png'
                        alt='Vercel logomark'
                        width={200}
                        height={200}
                    />
                </div>
            </main>
            <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
                <h2>Footer Stuff</h2>
            </footer>
        </div>
    );
}
