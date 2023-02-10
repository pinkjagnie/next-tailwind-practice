import React, { useEffect, useState } from "react";
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const openNavHandler = () => {
    setOpenNav((current) => !current);
    console.log(openNav)
  };

  useEffect(() => {
    const colorChanger = () => {
      if (window.scrollY >= 90) {
        setColor('white');
        setTextColor('black');
      } else {
        setColor('transparent');
        setTextColor('white');
      }
    };
    window.addEventListener('scroll', colorChanger);
  }, []);

  return(
    <section style={{ backgroundColor: `${color}` }} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>

      {/* Desktop menu */}
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'><h1 style={{ color: `${textColor}` }} className='font-bold text-4xl text-fuchsia-600'>Pink</h1></Link>
        <ul className='hidden sm:flex'>
          <li className='p-4 hover:text-gray-500'><Link href='/'>Home</Link></li>
          <li className='p-4 hover:text-gray-500'><Link href='/#gallery'>Gallery</Link></li>
          <li className='p-4 hover:text-gray-500'><Link href='/work'>Work</Link></li>
          <li className='p-4 hover:text-gray-500'><Link href='/contact'>Contact</Link></li>
        </ul>

        {/* Mobile hamburger icon */}
        <div className="block sm:hidden z-10" onClick={openNavHandler}>
          {openNav ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
        </div>

        {/* Mobile menu */}
        <div className={openNav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'><Link href='/'>Home</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500'><Link href='/#gallery'>Gallery</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500'><Link href='/work'>Work</Link></li>
            <li className='p-4 text-4xl hover:text-gray-500'><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>

      </div>
    </section>
  )
};

export default Navbar;