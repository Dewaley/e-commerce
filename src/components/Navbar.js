import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { IoLogInOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex justify-between py-3 px-4  border-b-teal-400 border-b-2 items-center'>
        <h1 className='text-2xl'>Shopping</h1>
        <nav className='hidden sm:flex gap-2 text-xl'>
          <Link className='cursor-pointer' to='/'>Home</Link>
          <Link className='cursor-pointer' to='/products'>Products</Link>
          <Link className='cursor-pointer' to=''>About</Link>
          <Link className='cursor-pointer' to=''>Contact</Link>
        </nav>
        <ul className='hidden sm:flex gap-2'>
          <li className='flex items-center border-teal-500 p-1 hover:bg-teal-500 hover:text-white transition-hover duration-500 border-2 rounded'>
            <IoLogInOutline />
            &nbsp; Login
          </li>
          <li className='flex items-center border-teal-500 p-1 hover:bg-teal-500 hover:text-white transition-hover duration-500 border-2 rounded'>
            <IoCartOutline />
            &nbsp;Cart (0)
          </li>
        </ul>
        <GiHamburgerMenu className='sm:hidden' onClick={() => setOpen(true)} />
      </div>
      <div
        className={`absolute bg-teal-400 flex flex-col top-0 w-full sm:hidden h-screen transition-right duration-700 ease-linear overflow-hidden ${
          open ? 'right-0 flex' : '-right-full hidden'
        }`}
      >
        <AiOutlineClose
          className='text-3xl mt-4 mb-6 mx-2 cursor-pointer'
          onClick={() => setOpen(false)}
        />
        <ul className='flex flex-col gap-2 text-xl'>
          <li className='p-2 border-b-2 border-black'>Home</li>
          <li
            className='p-2 border-b-2 border-black'
            onClick={() => navigate('/products')}
          >
            Products
          </li>
          <li className='p-2 border-b-2 border-black'>About</li>
          <li className='p-2 border-b-2 border-black'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
