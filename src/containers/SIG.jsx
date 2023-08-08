import React from 'react'
import mobile from '../assets/sig/mobile.svg'
import iot from '../assets/sig/iot.svg'
import design from '../assets/sig/design.svg'

import web from '../assets/sig/web.svg'
import ml from '../assets/sig/ml.svg'
import gamedev from '../assets/sig/gamedev.svg'

import icpc from '../assets/sig/icpc.svg'
import base from '../assets/sig/base.svg'
import cybersec from '../assets/sig/cybersec.svg'

const SIG = () => {
  return (
    <div className='bg-[#FAFAFA]'>
        <div className='flex gap-x-16 mx-48 my-32'>
            <div className='flex-1 mx-6 my-24 w-full justify-center items-center'>
                <div className='flex justify-center'>
                    <img src={mobile} alt=''/>
                    <img src={iot} alt=''/>
                    <img src={design} alt=''/>
                </div>
                <div className='flex justify-center'>
                    <img src={web} alt=''/>
                    <img src={ml} alt=''/>
                    <img src={gamedev} alt=''/>
                </div>
                <div className='flex justify-center'>
                    <img src={icpc} alt=''/>
                    <img src={base} alt=''/>
                    <img src={cybersec} alt=''/>
                </div>
            </div>
            <div className='flex flex-1 flex-col justify-center items-start gap-y-16'>
                <h2 className=''>Find your special interest</h2>
                <h4 className='text-gray-500'>SIG (Special Interest Group) is a community that develops together in special tech areas. You can learn new things and find like-minded people regardless of your major* or experience.

*SIGs are only for NU Students.</h4>
                <button><h4>Join SIGs</h4></button>
            </div>
    </div>
    </div>
  )
}

export default SIG