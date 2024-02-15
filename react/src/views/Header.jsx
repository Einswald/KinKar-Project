import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='flex justify-between h-[70px] w-full shadow-lg px-[25px] items-center'>
        <div className='flex items-center rounded-[5px]'>
          <input type="text" className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='search for..'/>
          <div className='bg-[#365486] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
              <FaSearch color='white'/>
          </div>
        </div>
        <div className='flex items-center ml-auto bg-[#365486] rounded-full'>
          <div className='px-5 py-4 font-bold  rounded-full '>
              <h1 className='text-white'>Hello</h1>
          </div>
          <div className='h-[50px] w-[50px] rounded-full bg-white ml-2 mr-1'>
            <img src='./asset/Cute.jpg' alt='Cute' className='rounded-full'/>
          </div>
        </div>
    </div>
  );
}

export default Header;
