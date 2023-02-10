import React from "react";

const Hero = ({ heading, message }) => {
  return(
    <div className="h-[100vh] flex items-center justify-center mb-12 custom-img bg-fixed bg-center bg-cover">
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[3] mt-[-10rem]'>
        <h2 className='text-5xl text-center font-bold'>{heading}</h2>
        <p className='py-5 text-center text-xl'>{message}</p>
        <div className="flex justify-center">
          <button className='px-8 py-2 border'>Book</button>
        </div>
      </div>
    </div>
  )
};

export default Hero;