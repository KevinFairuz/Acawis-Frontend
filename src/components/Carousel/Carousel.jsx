import React from 'react';
import { Carousel } from '@material-tailwind/react';
import image1 from '../../assets/Rectangle-185.png';

export default function CarouselDefault() {
  return (
    <Carousel className="rounded-xl  w-[750px] bg-transparent">
      <img src={image1} alt="image 1" className="h-full w-full" />
    </Carousel>
  );
}
