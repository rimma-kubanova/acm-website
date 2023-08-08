import React from 'react'
import { Slider } from '../components'

const Community = () => {
  return (
    <div className='bg-[#FAFAFA]'>
        <div className='flex gap-x-16 mx-48 my-32'>
            <div className='flex flex-1 flex-col justify-center items-start gap-y-16'>
                <h2 className=''>Be a part of the community</h2>
                <h4 className='text-gray-500'>In our chapter, you will not only gain valuable 
                coding knowledge and experience, but you will also become a 
                part of a very supportive and close-knit community.</h4>
                <button><h4>Participate in our events</h4></button>
            </div>
            <div className='flex-1 mx-6 my-24'>
                <Slider />
            </div>
        </div>
    </div>
  )
}

export default Community