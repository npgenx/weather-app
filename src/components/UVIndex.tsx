import React from 'react';
import {Slider} from './ui/slider';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const UVINdex = () => {
    return (
        <Card className='col-span-2 flex flex-col'>
            <CardHeader>
                <CardTitle>UV Index</CardTitle>
                <CardDescription>{'High'}</CardDescription>
            </CardHeader>
            <CardContent className='grow content-center'>
                <Slider
                    value={[7]}
                    min={0}
                    max={11}
                    className='uvindex  h-3 '
                    disabled
                />
            </CardContent>
            <CardFooter>
                <em className='place-item-end font-thin text-sm'>More info: 
                    <a
                        href='https://19january2017snapshot.epa.gov/sunsafety/uv-index-scale-1_.html'
                        target='blank'
                    className='text-blue-700 '>
                        {' '}UV Index Scale
                    </a>
                </em>
            </CardFooter>
        </Card>
    );
};

export default UVINdex;
