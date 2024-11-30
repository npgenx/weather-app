import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Flame } from 'lucide-react';
import { Slider } from './ui/slider';

const AirQuality = () => {
    return (
        <Card className='col-span-4 row-start-2 col-start-4'>
            <CardHeader>
                <CardTitle className='flex items-center gap-3'>
                    <Flame />
                    Air Quality
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Slider
                    value={[101]}
                    min={0}
                    max={500}
                    className='air-quality h-3'
                    disabled
                />
            </CardContent>
            <CardFooter>
                <span>
                    SO<sub>2</sub>: <b>{100}</b>
                </span>
                <span>
                    NO<sub>2</sub>: <b>{200}</b>
                </span>
                <span>
                    PM<sub>10</sub>: <b>{250}</b>
                </span>
                <span>
                    PM<sub>2.5</sub>: <b>{200}</b>
                </span>
                <span>
                    O<sub>3</sub>: <b>{150}</b>
                </span>
                <span>
                    CO: <b>{120}</b>
                </span>

                <em className='place-item-end font-thin text-sm'>
                    Pollutant concentration in μg/m<sup>3</sup>
                </em>
            </CardFooter>
        </Card>
    );
};

export default AirQuality;
