import { createBrowserRouter } from 'react-router';
import App from '../App';
import { createElement } from 'react';
import Root from '../layout/Root';

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
            element: createElement('div', null, 'Counter Page'),
         },
      ],
   },
]);

export default router;
