import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ClassDictionary } from 'clsx';


const CardLoader = (className:ClassDictionary) => {
  return (
    <Card className={cn('grid max-h-full', className)}>
      {' '}
          <span className='loader' />
      </Card>
  );
}

export default CardLoader