
import WeatherWindow from '@/components/WeatherWindow';
import Header from '@/components/Header';

export default function Home() {
    return (
        <div className='min-w-min min-h-screen bg-background'>
            <div className='flex flex-col mx-auto px-4 max-w-screen-2xl min-h-screen'>
                <Header />
                <WeatherWindow />
                {/* <Footer /> */}
            </div>
        </div>
    );
}
