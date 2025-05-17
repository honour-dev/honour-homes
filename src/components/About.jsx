import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <section id='about' className='mb-9 mt-32 text-black text-center mx-auto flex flex-col items-center justify-center container w-full overflow-hidden'>
      <h1 className='capitalize text-2xl font-semibold sm:text-3xl'>about <span className='text-amber-700 underline'>our brand</span></h1>
      <p className='capitalize text-[1rem] max-w-lg mb-10'>passionate about properties, dedicated to your vision</p>

      <div className='flex flex-col md:flex-row mx-auto md:justify-center md:items-center w-full'>
        <div className='h-[100%] w-[100%] '>
          <img src={assets.house2} alt="" className='rounded-tl-[15rem] rounded-tr-[4rem] h-[79%] w-[79%] md:h-[70%] md:w-[70%] xl:h-[50%] xl:w-[50%] mx-auto' />
        </div>
        <div className='flex flex-col gap-9 w-[100%] justify-start items-start mx-auto p-10'>
          <div className='grid grid-cols-2 '>
            <div>
              <h2 className='text-3xl'>10+</h2>
              <p className='capitalize text-sm'>years of experience</p>
            </div>
            <div>
              <h2 className='text-3xl'>12+</h2>
              <p className='capitalize text-sm'>projects completed</p>
            </div>
            <div>
              <h2 className='text-3xl'>20+</h2>
              <p className='capitalize text-sm'>mn. sq. ft. delivered</p>
            </div>
            <div>
              <h2 className='text-3xl'>25+</h2>
              <p className='capitalize text-sm'>ongoing projects</p>
            </div>
          </div>
          <p className='text-left mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam pariatur voluptatem nulla cumque est repudiandae quibusdam, sequi illo cum quos quaerat sit ut. Eos laboriosam accusamus, deleniti adipisci magnam excepturi aliquid delectus amet dolor veritatis quibusdam distinctio! Magnam, dolores atque.</p>

          <div>
            <button className='capitalize bg-amber-600 md: inline-block mx-auto p-3 text-white font-semibold hover:bg-white hover:border-amber-600 border-2 hover:text-amber-600 duration-400 cursor-pointer'>learn more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
