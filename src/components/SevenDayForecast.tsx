import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import Image from 'next/image';

const DayForecast = ({
    day = 'Monday',
    temp_max = 105,
    temp_min = -15,
    weathercode = '04',
}) => {
    return (
        <div className='daily-forevast py-4 flex flex-col justify-evenly border-b-2'>
            <p className='text-xl min-w-[3.5rem] flex flex-row gap-4 items-center'>
                <span> {day} </span>
                <Image
                    src={`./images/${weathercode}n@2x.png`}
                    alt='weather'
                    width={50}
                    height={50}
                />
            </p>

            <div className='flex-1 flex items-center justify-between gap-4'>
                <p className='font-bold'>{Math.round(temp_min)}°F</p>
                <div className='air-quality flex-1 w-full h-2 rounded-lg'></div>
                <p className='font-bold'>{Math.round(temp_max)}°F</p>
            </div>
        </div>
    );
};

const SevenDayForecast = () => {
    return (
        <Card className=' col-span-3 row-start-3 row-span-3'>
            <CardHeader>
                <CardTitle>{7} Day Forecast </CardTitle>
            </CardHeader>
            <CardContent>
                {Array.from({ length: 7 }).map((data, index) => {
                    const dataw = {temp_min: 0, temp_max: 100};
                    return <DayForecast {...dataw} key={index} />;
                })}
            </CardContent>
        </Card>
    );
};

export default SevenDayForecast;
