import React from 'react';

const Navbar = () => {
  return (
    <div className='flex justify-between py-3 px-5 border-b-teal-400 border-b-2 items-center'>
      <h1 className='text-3xl'>Shopping</h1>
      <ul className='flex gap-5'>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className='flex gap-5'>
        <li>login</li>
        <li>cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
