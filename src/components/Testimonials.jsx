import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <section className='container mx-auto py-16 px-6 md:px-18 lg:px-32 w-full text-center' id='testimonials'>
      <h1 className='capitalize font-semibold text-2xl sm:text-3xl'>Testimonials</h1>
      <p className='capitalize'>real stories from those who found home with us</p>

      <div className='flex flex-col md:flex-row justify-center gap-8 mt-10'>
        {testimonialsData.map(({id, name, title, image, alt, text}) => (
          <div key={id} className='h-full w-full border border-amber-600 max-w-[35rem] bg-center bg-cover shadow-lg px-8 py-12'>
            <img src={image} alt={alt} className='text-center mx-auto rounded-full h-[3.5rem] w-[3.5rem]'/>
            <h2 className='text-gray-900 font-medium text-[1.03rem] mt-4'>{name}</h2>
            <p className='text-gray-500 font-medium text-sm'>{title}</p>
            <p className='text-gray-500 font-medium lg:text-sm md:text-xs mt-2'>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
