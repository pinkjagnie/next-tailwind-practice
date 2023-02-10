import React from "react";

import InstagramImg from "./InstagramImg";

import { igImg1, igImg2, igImg3, igImg4, igImg5, igImg6 } from "@/assets/index";

const igImages = [igImg1, igImg2, igImg3, igImg4, igImg5, igImg6];

const Insta = () => {
  return(
    <section className='max-w-[1240px] mx-auto text-center pt-2 pb-24'>
      <h1 className='text-2xl font-bold text-fuchsia-600'>Follow me on Instagram</h1>
      <p className='pb-4 text-sky-700 font-semibold'>@PinkPhotography</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        {igImages.map((image, index) => {
          return(
            <InstagramImg socialImg={image} key={index} />
          )
        })}
      </div>
    </section>
  )
};

export default Insta;