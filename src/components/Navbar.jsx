import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(()=>{
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu]);

  return (
    <div className='top-0 absolute container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-18 bg-transparent font-semibold'>
      <img src={assets.estate_logo} alt="" className='top-0 left-0 w-11 h-11 cursor-pointer' id='header'/>
      <ul className='hidden md:flex gap-11 text-white'>
        <a href="#header" className='capitalize cursor-pointer hover:text-amber-500 transition ease-in-out duration-400'>home</a>
        <a href="#about" className='capitalize cursor-pointer hover:text-amber-500 transition ease-in-out duration-400'>about</a>
        <a href="#projects" className='capitalize cursor-pointer hover:text-amber-500 transition ease-in-out duration-400'>project</a>
        <a href="#testimonials" className='capitalize cursor-pointer hover:text-amber-500 transition ease-in-out duration-400'>testimonials</a>
      </ul>
      <button className='cursor-pointer hidden md:block rounded-full capitalize bg-white hover:bg-amber-600 hover:text-white transition duration-300 ease-in px-2 py-1 border-white border-2'>sign up</button>
      <div onClick={()=>setShowMobileMenu(true)} className='md:hidden text-4xl text-white cursor-pointer'>
        <i className="uil uil-align-right"></i>
      </div>


      {/* ------------- menu items----------- */}
      <div className={`md:hidden ${showMobileMenu ? 'w-full fixed': 'hidden'} bg-amber-600 mt-0 top-0 right-0 bottom-0  items-center overflow-hidden z-1 transition-all ease-in-out text-lg`}>
        <div onClick={()=>setShowMobileMenu(false)} className='md:hidden text-4xl text-white cursor-pointer absolute right-0 pr-10 mt-7 hover:text-red-800 duration-500'>
          <i className="uil uil-multiply"></i>
        </div>
        <ul className='flex flex-col justify-center mt-18 items-center text-white capitalize'>
          <a onClick={()=>setShowMobileMenu(false)} href="#header" className='inline-block py-4 cursor-pointer mb-2 hover:bg-amber-700 w-full text-center transition duration-400'>home</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#about" className='inline-block py-4 cursor-pointer mb-2 hover:bg-amber-700 w-full text-center transition duration-400'>about</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#projects" className='inline-block py-4 cursor-pointer mb-2 hover:bg-amber-700 w-full text-center transition duration-400'>projects</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#testimonials" className='inline-block py-4 cursor-pointer mb-2 hover:bg-amber-700 w-full text-center transition duration-400'>testimonials</a>
        </ul>
      </div>     
    </div>
  )
}

export default Navbar
