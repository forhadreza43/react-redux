import { createBrowserRouter } from 'react-router';
import App from '../App';
// import { createElement } from 'react';
import Root from '../layout/Root';
import Counter from '@/components/counter/Counter';

const router = createBrowserRouter([
   {
      Component: Root,
      children: [
         {
            index: true,
            Component: App,
         },
         {
            path: 'counter',
            Component: Counter,
         },
      ],
   },
]);

export default router;
