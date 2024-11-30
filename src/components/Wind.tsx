import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import React from 'react';

const Wind = () => {
    return (
        <Card className='col-span-2'>
            <CardHeader>
                <CardTitle>Wind (speed, dir, gust)</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>Card Content</CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
};

export default Wind;
