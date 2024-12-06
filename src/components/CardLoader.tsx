import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ClassDictionary } from 'clsx';


const CardLoader = (className:ClassDictionary) => {
  return (
      <Card
          className={cn(
              'col-span-2 flex min-h-[300px] place-items-center place-content-center ',
              className
          )}>
          {' '}
          <span className='loader' />
      </Card>
  );
}

export default CardLoader