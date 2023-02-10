import React, { useState } from "react";
import Image from "next/image";

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import { sliderData } from "@/constans/index";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return(
    <section id="gallery" className='max-w-[1240px] mx-auto mb-12 overflow-x-hidden'>
      <h1 className='text-2xl font-bold text-center p-4 text-fuchsia-600'>Gallery</h1>

      {/* Gallery */}
      <div className="relative flex justify-center p-4">
        {sliderData.map((slide, index) => {
          return(
            <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
              <div style={{height: "500px", width: "1000px", margin: "0 auto"}}>
              <FaArrowCircleLeft size={50} className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]" onClick={prevSlide}/>
              {index === current && <Image src={slide.image} alt="" fill />}
              <FaArrowCircleRight size={50} className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]" onClick={nextSlide}/>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
};

export default Slider;