// components/Navbar.tsx

import { UserIcon , Cog8ToothIcon ,ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#C33335', zIndex: 10, position: 'relative' }} className="p-5 flex justify-end top-0 z-40 flex-none w-full mx-auto ">
      <div className="container flex justify-end">
        {/* Left Side - Brand */}
        <div className="text-white text-xl font-bold">
        
        </div>

       
        <div className="flex items-center space-x-4">
          <a href="/profile" className="text-white flex items-center">
            <UserIcon className="h-5 w-5 mr-1" />
          
          </a>
          <a href="/settings" className="text-white flex items-center">
            <Cog8ToothIcon className="h-5 w-5 mr-1" />
           
          </a>
          <button className="text-white flex items-center">
            <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
