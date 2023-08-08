import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import img1 from '../assets/2023.jpeg';
import img2 from '../assets/2022.jpeg';
import img3 from '../assets/2019.jpeg';


const Slider = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div className='w-full rounded-2xl'>
    <Carousel mx="auto" slideGap="md" plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      withControls={false}
      withIndicators
      >
    <Carousel.Slide><img className='rounded-lg' src={img1}/></Carousel.Slide>
    <Carousel.Slide><img className='rounded-lg' src={img2}/></Carousel.Slide>
    <Carousel.Slide><img className='rounded-lg' src={img3}/></Carousel.Slide>
    </Carousel>
    </div>   
  )
}

export default Slider