import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Compass from '@/components/ui/compass';

import { WindIcon } from 'lucide-react';

import React from 'react';

const WindInfo = () => {
    return (
        <Card className='col-span-2 center'>
            <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                    <WindIcon /> Wind Info
                </CardTitle>
            </CardHeader>
            <CardContent className='flex justify-center gap-2'>
                <Compass speed={3.9} deg={235} />
            </CardContent>
            <CardFooter>Wind gust are: 5 mph</CardFooter>
        </Card>
    );
};

export default WindInfo;
