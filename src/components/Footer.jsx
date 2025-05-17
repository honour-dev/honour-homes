import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-amber-800 w-full overflow-hidden pb-8' id='footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.estate_logo} alt="" className='top-0 left-0 w-11 h-11'/>
          <p className='text-white mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ratione excepturi eaque impedit odio! Magni expedita dolorum natus sit amet?</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-2 capitalize'>company</h3>
          <ul className='flex flex-col font-medium'>
            <a href="#header" className='hover:text-amber-400 text-white capitalize duration-400'>home</a>
            <a href="#about" className='hover:text-amber-400 text-white capitalize duration-400'>about us</a>
            <a href="#contact" className='hover:text-amber-400 text-white capitalize duration-400'>contact us</a>
            <a href="#" className='hover:text-amber-400 text-white capitalize duration-400'>privacy policy</a>
          </ul>
        </div>
        <div className='w-full md:w-1/3 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-2 capitalize'>subscribe to our newsletter</h3>
          <p className='mb-2 max-w-80 text-amber-100'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex gap-1'>
            <input type="email" name="email" placeholder='Enter your Email' className='p-2 bg-white border-r text-grey-900 font-medium focus:outline-none'/>
            <button className='py-2 px-3 bg-amber-50 capitalize font-medium cursor-pointer text-amber-700'>subscribe</button>
          </div>
        </div>
      </div>
      <div className='border-t border-amber-500 py-2 pb-1 mt-10 text-center text-amber-200'>Copyright 2025 @ Honour-dev. All Rights Reserved.</div>
    </div>
  )
}

export default Footer
