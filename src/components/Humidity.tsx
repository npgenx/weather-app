import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {Droplets} from 'lucide-react';

import React from 'react';

const Humidity = () => {
    return (
        <Card className='col-span-2 flex flex-col'>
            <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                    <Droplets />
                    Humidity
                </CardTitle>
            </CardHeader>
            <CardContent className='flex grow items-center justify-center'>
                <p className='text-5xl font-bold'>55%</p>
            </CardContent>
            <CardFooter className=''>
                <p>Dry: May cause skin irritation</p>
            </CardFooter>
        </Card>
    );
};

export default Humidity;
