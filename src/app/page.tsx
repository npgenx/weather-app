'use client';

import { ModeToggle } from '@/components/ModeToggle';
import { useWeatherContext } from '@/providers/weather-provider';
import { SearchCombo } from '@/components/search-combo';

export default function Home() {
    const { a } = useWeatherContext();
    return (
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
                <ModeToggle />
                The value is : {a}
            </main>
            <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
                <h2>Footer Stuff</h2>
            </footer>
        </div>
    );
}
