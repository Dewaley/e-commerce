import React, { useState } from 'react';
import { IoLogInOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className='flex justify-between py-3 px-4  border-b-teal-400 border-b-2 items-center'>
        <h1 className='text-2xl'>Shopping</h1>
        <ul className='hidden sm:flex gap-2 text-xl'>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className='hidden sm:flex gap-2'>
          <li className='flex items-center border-black border-2 p-0.5'>
            <IoLogInOutline />
            &nbsp; Login
          </li>
          <li className='flex items-center border-black border-2 p-0.5'>
            <IoCartOutline />
            &nbsp;Cart (0)
          </li>
        </ul>
        <GiHamburgerMenu className='sm:hidden' onClick={() => setOpen(true)} />
      </div>
      <div
        className={`absolute bg-teal-400 flex flex-col top-0 w-3/5 sm:hidden h-screen transition-right duration-700 ease-linear overflow-hidden ${
          open ? 'right-0' : '-right-full'
        }`}
      >
        <AiOutlineClose
          className='text-3xl mt-4 mb-6 mx-2 cursor-pointer'
          onClick={() => setOpen(false)}
        />
        <ul className='flex flex-col gap-2 text-xl'>
          <li className='p-2 border-b-2 border-black'>Home</li>
          <li className='p-2 border-b-2 border-black'>Products</li>
          <li className='p-2 border-b-2 border-black'>About</li>
          <li className='p-2 border-b-2 border-black'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
