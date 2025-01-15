import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const NavBar = () => {
  return (
    <>
      <AppBar className="bg-[#FE7700] h-[63px] shadow-none w-full">
        <Toolbar className="flex justify-between items-center">
          {/* Logo Section */}
          <Typography variant="h6">
            Cafe Logo
          </Typography>

          {/* Navigation Menu */}
          <ul className="hidden sm:flex space-x-6 sm:flex-row flex-col sm:space-x-6 sm:space-y-0 space-y-4 justify-center items-center">
            <li className="text-[16px] font-semibold text-[#FFF8F8] cursor-pointer hover:text-black hover:border-b-2 hover:border-black ">Find a Cafe</li>
            <li className="text-[16px] font-semibold text-[#FFF8F8] cursor-pointer hover:text-black hover:border-b-2 hover:border-black ">Categories</li>
            <li className="text-[16px] font-semibold text-[#FFF8F8] cursor-pointer hover:text-black hover:border-b-2 hover:border-black ">About Us</li>
            <li className="text-[16px] font-semibold text-[#FFF8F8] cursor-pointer hover:text-black hover:border-b-2 hover:border-black ">Gallery</li>
            <li className="text-[16px] font-semibold text-[#FFF8F8] cursor-pointer hover:text-black hover:border-b-2 hover:border-black ">Contact Us</li>
          </ul>

          <p className='sm:hidden text-[16px] font-semibold text-[#FFF8F8] cursor-pointer hover:text-black hover:border-b-2 hover:border-black'>Menu</p>
          
        </Toolbar>
      </AppBar>
      <div className="pt-[63px]">
      </div>
    </>
  );
};

export default NavBar;
