import { Outlet } from 'react-router';

export default function Root() {
   return (
      <div className="container mx-auto px-4 sm:px-0">
         <Outlet />
      </div>
   );
}
