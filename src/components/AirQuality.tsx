import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const AirQuality = () => {
    return (
        <Card className='col-span-4 row-start-2 col-start-4'>
            <CardHeader>
                <CardTitle>Air Quality</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>Card Content</CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
};

export default AirQuality;
