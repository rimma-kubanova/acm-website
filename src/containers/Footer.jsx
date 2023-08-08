import React from 'react'
import {FaInstagram,FaTelegramPlane,FaTiktok, FaYoutube, FaLinkedinIn, FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full px-48 my-36 grid gap-12'>
      <h2>Stay Tuned!</h2>
      <div className='flex gap-12'>
        <div className='w-28 h-28 bg-[#0492D2] rounded-full flex justify-center items-center'><FaTelegramPlane color='white' size={60}/></div>
        <div className='w-28 h-28 bg-[#0492D2] rounded-full flex justify-center items-center'><FaInstagram color='white' size={70}/></div>
        <div className='w-28 h-28 bg-[#0492D2] rounded-full flex justify-center items-center'><FaTiktok color='white' size={60}/></div>
        <div className='w-28 h-28 bg-[#0492D2] rounded-full flex justify-center items-center'><FaYoutube color='white' size={65}/></div>
        <div className='w-28 h-28 bg-[#0492D2] rounded-full flex justify-center items-center'><FaLinkedinIn color='white' size={55}/></div>
        <div className='w-28 h-28 bg-[#0492D2] rounded-full flex justify-center items-center'><FaFacebookF color='white' size={60}/></div>
      </div>
    </div>
  )
}

export default Footer