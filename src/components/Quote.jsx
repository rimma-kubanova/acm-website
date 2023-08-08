import React from 'react'


const Quote = ({image, title, quote}) => {
  return (
    <div className='w-10/12 rounded-xl shadow-2xl mx-48 my-24'>
        <div className='m-16 grid gap-y-12'>
            <div className='flex justify-center'>
            <img src={image}/>
            </div>
            <h3 className='text-center'>{title}</h3>
            <div className='mx-8'>
                <h4 className='text-gray-500'> {quote}</h4>
            </div>
        </div>
    </div>
  )
}

export default Quote