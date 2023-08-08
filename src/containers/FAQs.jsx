import React, { useState } from 'react'
import { FAQ } from '../components';

const FAQs = () => {
    const [open, setOpen] = useState(false);
    const toggle= (index) =>{
        if(open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }

    const FAQdata =[{
        question:"Are ACM events only for Computer Science students?",
        answer:"No. Regardless of your major or experience, you can participate in our events to gain knowledge and experience",
    },
    {
        question:"Can non-ACM Members participate in ACM events?",
        answer:"Yes. All our events are non-profit and open to everyone",
    },
    {
        question:"Does ACM teach coding its members?",
        answer:"We don’t teach you to code at ACM, but you can learn how to code at our weekly SIG (Special Interest Groups) sessions where peer tutors can help you understand and give you direction. We are here not to code. We are here to help you code and inspire.",
    },
    {
        question:"Does ACM recruit only experienced programmers?",
        answer:"No. We do not look at your coding skills, but we consider how much you are motivated to help with promoting IT not only in NU, but also in Kazakhstan. It doesn't matter what major you are in and how well you know how to code.",
    },
    {
        question:"How can I learn more about ACM?",
        answer:"You can come to our Opening Sessions at the beginning of Fall Semester. There we tell more about our events and answer all of your questions. Also you can follow us on social media",
    },];
  return (
    <div className='w-full px-48 my-36'>
        <h2>Frequently asked questions</h2>
            <div className='grid gap-4 my-6'>
                {FAQdata.map((data,index) =>{
                    return <FAQ 
                    key={index} 
                    open={ index === open} 
                    question={data.question}
                    answer={data.answer} 
                    toggle={()=>toggle(index)}/>
                })}
            </div>
    </div>
  )
}

export default FAQs