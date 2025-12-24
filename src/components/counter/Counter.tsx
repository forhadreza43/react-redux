
import { useState } from 'react';
import { Button } from '../ui/button';

export default function Counter() {
   const [count, setCount] = useState(0);
   return (
      <div className='flex gap-5 pt-5'>
         <Button
            onClick={() => {
               setCount(count + 1);
               console.log(`Count is now: ${count + 1}`);
            }}
         >
            Add++ {count}
         </Button>
         
         <Button
            onClick={() => {
               setCount(count - 1);
               console.log(`Count is now: ${count - 1}`);
            }}
            variant={'secondary'}
         >
            Subtract- - {count}
         </Button>
         
      </div>
   );
}
