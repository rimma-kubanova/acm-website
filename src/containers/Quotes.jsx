import React, {useRef} from 'react'
import { Carousel } from '@mantine/carousel';
import { Quote } from '../components';
import Autoplay from 'embla-carousel-autoplay';
import { Akerke, Aruzhan, Nargiz, Aysana, Malika, Amina } from '../assets/board';

const Quotes = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className='w-full'>
    <Carousel mx="auto" slideGap="md" withIndicators
    plugins={[autoplay.current]}
    onMouseEnter={autoplay.current.stop}
    onMouseLeave={autoplay.current.reset}>

    <Carousel.Slide className='flex justify-center items-center'>
    <Quote
        image={Malika}
        title='Malika, ex-Chair of ACM'
        quote='Almost all of my student life is ACM. I joined it during the foundation year, and since then I have never regretted it. 
        Here I found my calling, friends and endless possibilities. Aspire, code, move 💙' />
    </Carousel.Slide>

    <Carousel.Slide className='flex justify-center items-center'>
    <Quote
        image={Amina}
        title='Amina, ex-Vice-Chair of ACM'
        quote='This was a crazy time for me to discover my hidden abilities (and stress limits too). With a vague image of what coding 
        contests and hackathons look like, my shaking hands in collaboration with Malika were able to leverage the quality of events and 
        even organize new ones. Along the way, I understood what it means to be a true leader. For me now it’s a person who’s able to 
        spot people’s potential and create a solid ground for them to nourish and achieve a common goal. I love my members and am thankful 
        for every hard work they put into making ACM-SC what it is now.' />
    </Carousel.Slide>

    <Carousel.Slide className='flex justify-center items-center'>
        <Quote
        image={Akerke}
        title='Akerke, ex-Vice-Chair of ACM-W'
        quote='Something that was truly important to me - it showed that there’s no limit to your dreams and to what you can do. 
        Some started companies, some worked for tech giants, 
        and some were accepted into their dream programs.<br/>ACM members and alumni are very eager to learn, 
        improve and help, and such passion motivates me to be the same. 
        ACM also showed me the beauty of management and discipline. 
        From creating syllabuses for SIGs, executing tasks, and making my 
        first LeetCode submissions to building my own team, working directly 
        with Tech companies, and organizing global olympiads, all of this allowed 
        me not only to boost my soft skills but also work with some of the best people 
        I know.'/>
    </Carousel.Slide>

    <Carousel.Slide className='flex justify-center items-center'>
    <Quote
        image={Aruzhan}
        title='Aruzhan, ex-Vice-Chair of ACM'
        quote='It is fascinating how a student club can become a family where everyone is ready to help each other at any time. 
        At first, I decided to try to join as many clubs as possible but I joined none since I became a member of ACM during my 
        foundation year. Now I am in my senior year and I have no regrets about that.' />
    </Carousel.Slide>

    <Carousel.Slide className='flex justify-center items-center'>
    <Quote
        image={Aysana}
        title='Aysana, ex-Chair of ACM-W'
        quote='Being a chair of ACM-W was a whole new experience that I was extremely lucky to have. It definitely played a huge role 
        not only in my student life but also helped in shaping my professional self. As I always say, I don’t think I would’ve been 
        where I am right now if I wasn’t brave enough to join and later lead such an amazing and supportive community <3 Seriously, 
        where else can you find people who are so motivated to help YOU grow?' />
    </Carousel.Slide>

    <Carousel.Slide className='flex justify-center items-center'>
    <Quote
        image={Nargiz}
        title='Nargiza, ex-Vice-Chair of ACM-W'
        quote='Being part of ACM as Vice-Chair of the Women Student Chapter has been a life-changing experience for me. 
        It gave me the chance to hone my communication, teamwork, event sponsorship negotiation, and management skills. 
        Through ACM, I was able to organize coding marathons, technical workshops, and coding competitions, which further 
        fueled my love for technology and helped me make a difference in my community. ACM has played a crucial role in my 
        personal and professional development and I am forever thankful for the opportunities it has provided me. 
        This experience solidified my decision to pursue a career in product management and I am eager to bring my skills and 
        passion to this field.' />
    </Carousel.Slide>

    </Carousel>
    </div> 
  )
}

export default Quotes