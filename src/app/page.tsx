
import WeatherWindow from '@/components/WeatherWindow';
import Header from '@/components/Header';

export default function Home() {
    const isProd = process.env.NODE_ENV === 'production';
    
    const devScreen = !isProd
        ? 'sm:bg-red-600 md:bg-green-600 lg:bg-pink-600 xl:bg-yellow-500 2xl:bg-orange-600'
        : '';



    return (
        <div className={`min-w-min min-h-screen bg-background ${devScreen}`}>
            <div className='flex flex-col mx-auto px-4 max-w-screen-2xl min-h-screen'>
                <Header />
                <WeatherWindow />
                {/* <Footer /> */}
            </div>
        </div>
    );
}
