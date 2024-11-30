import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card';
import { SunriseIcon, SunsetIcon } from 'lucide-react';

const CurrentTemp = () => {
    return (
        <Card className='col-span-4 lg:col-span-3 lg:row-span-2 text-center '>
            <CardHeader className='pb-1'>
                <CardTitle className='text-7xl font-bold'> 65°F</CardTitle>
                <CardDescription>Feels like 63°F</CardDescription>
                <p className='flex  font-bold pt-4 justify-around'>
                    <span>Low:49°F</span>
                    <span>High:74°F</span>
                </p>
            </CardHeader>
            <CardContent className='flex flex-col justify-center p-0'>
                <Image
                    className='self-center'
                    src='./images/01d@2x.png'
                    alt='weather'
                    width={150}
                    height={150}
                />{' '}
                <br />
                <p className='font-bold'>Overcast</p>
            </CardContent>
            <CardFooter>
                <div className='flex pt-10 justify-around gap-2 w-full'>
                    <span className='flex gap-2 items-center'>
                        <SunriseIcon />
                        <p className='pt-1 '>6:18am</p>
                    </span>

                    <span className='flex gap-2 items-center'>
                        <SunsetIcon />
                        <p className='pt-1 '>4:45pm</p>
                    </span>
                </div>
            </CardFooter>
        </Card>
    );
};

export default CurrentTemp;
