import React from 'react'
import { Slider } from '../components'

const WhoWeAre = () => {
  return (
    <div className='bg-[#FAFAFA]'>
        <div className='flex gap-x-16 mx-48 my-32'>
            <div className='flex-1 mx-6 my-24'>
                <Slider />
            </div>
            <div className='flex flex-1 flex-col justify-center items-start gap-16'>
                <h2 className=''>Who are we?</h2>
                <h4 className='text-gray-500'>Nazarbayev University ACM Student Chapter is the first branch of the international ACM organization in Kazakhstan. Since 2017 we provide unique opportunities for networking, mentoring and bonding over common interests both within Nazarbayev University and locally.</h4>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAre