import React from "react";
import Image from "next/image";

import { portfolioData } from "@/constans/index";

const Portfolio = () => {
  return(
    <section className='max-w-[1240px] mx-auto pt-2 pb-16 text-center'>
      <h1 className='font-bold text-2xl p-4 text-fuchsia-600'>Travel Photos</h1>

      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          {portfolioData.map((image, index) => {
            return(
              <div key={index}>
                <Image src={image.image} alt="/" width={677} height={451} />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
};

export default Portfolio;