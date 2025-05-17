import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='bg-[url(header_img2.jpg)] items-center flex bg-cover w-full bg-center min-h-screen overflow-hidden mb-4'>
      <Navbar/>
      <div className='absolute text-center w-full flex flex-col capitalize items-center text-white font-bold'>
        <h2 className='md:text-5xl text-3xl items-center text-center max-w-2xl'>explore homes that fit your dreams</h2>
        <div className='capitalize flex justify-center gap-5 mt-10'>
          <a href="#projects" className='border-2 px-3.5 py-1 hover:bg-amber-600 transition-all duration-600'>projects</a>
          <a href="#contact" className='border-2 px-3.5 py-1 bg-amber-600 hover:bg-amber-700 duration-600'>contact us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
// {{backgroundImage: "url('/header_img.jpg')"}}
// w-full h-full