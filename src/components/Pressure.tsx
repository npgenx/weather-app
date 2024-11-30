import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Gauge} from 'lucide-react';

const Pressure = () => {
    return (
        <Card className='col-span-2 flex flex-col'>
            <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                    <Gauge />
                    Pressure
                </CardTitle>
            </CardHeader>
            <CardContent className='flex grow items-center justify-center'>
                <p className='text-4xl font-bold'>{'1018.4'} hPa</p>
            </CardContent>
        </Card>
    );
};

export default Pressure;
