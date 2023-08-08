import React from 'react';
import acm from '../assets/milashki.jpeg';

const Header = () => {
  return (
    <div className='w-full flex items-center justify-center' id='home'>
     <div className='flex gap-x-16 mx-20 my-32'>
      <div className='flex flex-1 flex-col justify-center items-start gap-6'>
        <h1 className=''>Aspire. Code. Move</h1>
        <h4 className='text-gray-500'>Advancing Computing as a Science & Profession among students</h4>
        <button className='mt-4'><h4>Participate in our events</h4></button>
      </div>
      <div className='flex-1'>
        <img className='h-auto rounded-2xl' src={acm} alt='acm-photo-milashki' />
      </div>
     </div>
    </div>
  )
}

export default Header