import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const SevenDayForecast = () => {
  return (
      <Card className=' col-span-3 row-start-3 row-span-3'>
          <CardHeader>
              <CardTitle>5 Day forecast </CardTitle>
              <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>
              <p>Card Footer</p>
          </CardFooter>
      </Card>
  );
}

export default SevenDayForecast