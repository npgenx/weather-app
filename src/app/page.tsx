'use client';

import MyDebuggerData from '@/components/Debug';
import Navbar from '@/components/Navbar';

export default function Home() {
    const isDev = process.env.NODE_ENV === 'development';

    return (
        <main className='mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto'>
            <Navbar />
            {isDev && <MyDebuggerData />}
        </main>
    );
}
