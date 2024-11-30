import {
    Card,

    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import React from 'react';

const WeatherMap = () => {
    return (
        <Card className='col-span-2 lg:col-span-8 lg:row-span-3'>
            <CardHeader>
                <CardTitle>Map</CardTitle>
            </CardHeader>
        </Card>
    );
};

export default WeatherMap;
