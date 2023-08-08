import React from 'react'
import { Collapse } from 'react-collapse'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const FAQ = ({open, toggle, question,answer}) => {
  return (
    <div className='p-12 shadow-lg'>
        <div className='bg-white flex justify-between items-center cursor-pointer'
        onClick={toggle}>
            <h3>{question}</h3>
            <div>
                {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </div>
        </div>

        <Collapse isOpened={open}>
            <div className='mt-6'>
            <h4 className='text-gray-500'>{answer}</h4>
            </div>
        </Collapse>
    </div>
  )
}

export default FAQ