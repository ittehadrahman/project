"use client";
import { MenuContext } from '@/context/MenuContext'
import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
const MainHeader = () => {
    const {toggle} = useContext(MenuContext);
  return (
    
      <div className='bg-white flex justify-between items-center px-4 h-12 mb-4'>
        <div>Brand</div>
        <div className='flex justify-between items-center gap-3'>
          <div>
            User Area
          </div>
          <div onClick={toggle} className='lg:hidden trasition-all duration-400'>
              <FaBars className='cursor-pointer '/>
          </div>
        </div>
      </div>
    
  )
}

export default MainHeader