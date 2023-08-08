import React, { useState } from 'react';
import logo from '../assets/acm diamond blue-2.svg';


const Menu = () => (
  <>
  <h4><a href='#home'>Home</a></h4>
  <h4><a href=''>About</a></h4>
  <h4><a href='#possibility'>Events</a></h4>
  </>
)
const Navbar = () => {
  return (
    <div className='w-full flex justify-between px-12 py-4 shadow-lg'>
      <div className='flex'> 
        <img src={logo} alt='logo'/>
        <div className='items-center flex mx-3'>
          <h5 className='text-2xl font-space'>NU ACM SC</h5>
        </div>
      </div>
      <div className='flex justify-start items-center gap-20'>
      <Menu />
      </div>
      <div>
      lang
      </div>
    </div>
  )
}

export default Navbar