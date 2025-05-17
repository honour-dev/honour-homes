import React, { useState } from 'react'

const Contact = () => {

  return (
    <section className='container mx-auto py-10 px-6 md:px-18 lg:px-32 w-full text-center' id='contact'>
      <h1 className='capitalize font-semibold text-2xl sm:text-3xl'>Contact</h1>
      <p className='capitalize'>ready to make a move? let's build your future together</p>
      
      <form action="" className='md:flex mx-auto justify-center mt-9 mb-9'>
        <div className='flex flex-wrap'>
          <div className='capitalize w-full md:w-1/2 text-left mb-3'>
            name
            <input type="text" name="name" placeholder='Name' className=' w-full border border-amber-600 rounded py-1 px-2 mt-2 required:required focus:outline-none'/>
          </div>
          <div className='capitalize w-full md:w-1/2 text-left md:pl-3'>
            email
            <input type="email" name="email" placeholder='Email' className=' w-full border border-amber-600 rounded py-1 px-2 mt-2 required:required focus:outline-none'/>
          </div>
          <div className='capitalize text-left mt-2 w-full'>
            message
            <textarea name="message" placeholder='message' className='w-full h-38 border border-amber-600 rounded resize-none py-1 px-2 required:required focus:outline-none'></textarea>
          </div>
          <button className='rounded bg-amber-600 text-white px-3 py-1 mx-auto mt-2 capitalize hover:bg-white hover:text-amber-600 border-2 hover:border-amber-600 duration-400 cursor-pointer font-semibold'>send message</button>
        </div>
      </form>
    </section>
  )
}

export default Contact
