import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import {Hourglass} from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from './ui/carousel';

const HourlyForecast = () => {
    return (
        <Card className='col-span-4'>
            <CardHeader>
                <CardTitle className='flex content-baseline gap-1'>
                    <Hourglass size={15} />
                    Hourly forecast for Monday
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Carousel className='tommy w-full max-w-sm place-self-center'>
                    <CarouselContent className='-ml-1'>
                        {Array.from({length: 5}).map((_, index) => (
                            <CarouselItem
                                key={index}
                                className='pl-1 md:basis-1/2 lg:basis-1/3'>
                                <div className='p-1'>
                                    <Card>
                                        <CardContent className='flex aspect-square items-center justify-center p-6'>
                                            <span className='text-2xl font-semibold'>
                                                {index + 1}
                                            </span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </CardContent>
        </Card>
    );
};

export default HourlyForecast;
