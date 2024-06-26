import React, { useState } from 'react';
import { AiOutlineAppstore, AiOutlineBook, AiOutlineHighlight, AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className='absolute top-5 right-4 z-[99] md:hidden'
      />

      {nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[20]'>
          <a
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHome size={20} />
            <span className='pl-4'>Home</span>
          </a>
          <a
            href='#create-app'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineAppstore size={20} />
            <span className='pl-4'>Build an App</span>
          </a>
          <a
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineBook size={20} />
            <span className='pl-4'>Write a Book</span>
          </a>
          <a
            href='#main'
            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
          >
            <AiOutlineHighlight size={20} />
            <span className='pl-4'>Design your Brand & Logo </span>
          </a>
        </div>
      ) : (
        ''
      )}
        <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <a href="#main" className='rounded-full shadow rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHome size={20}/>
            </a>
            <a href="#main" className='rounded-full shadow rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineAppstore size={20}/>
            </a>
            <a href="#main" className='rounded-full shadow rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineBook size={20}/>
            </a>
            <a href="#main" className='rounded-full shadow rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineHighlight size={20}/>
            </a>

          </div>
        </div>

    </div>
  );
};

export default Sidenav;
export { Sidenav };