import React, { useEffect, useState } from 'react'
import { projectsData } from '../assets/assets'

const Projects = () => {
  const [currentId, setCurrentId] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(()=>{
    const updateCardsToShow = ()=>{
      if(window.innerWidth >= 1024){
        setCardToShow(projectsData.length);
      }else{
        setCardToShow(1)
      }
    };
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return ()=> window.removeEventListener('resize', updateCardsToShow);
  }, [])

  const nextProject = ()=>{
    setCurrentId((prevId) => (prevId + 1) % projectsData.length)
  }
  const prevProject = () =>{
    setCurrentId((prevId) => prevId === 0 ? projectsData.length : prevId - 1)
  }

  return (
     <section id='projects' className='container mx-auto py-4 pt-10 px-6 md:px-18 w-full overflow-hidden'>
        <div className='mb-9 text-black text-center mx-auto flex flex-col items-center justify-center container w-full overflow-hidden'>
          <h1 className='capitalize text-2xl font-semibold sm:text-3xl'>projects <span className='text-amber-700 underline'>completed</span></h1>
          <p className='capitalize text-[1rem] max-w-lg mb-4'>crafting spaces, building legacies - explore our portfolio</p>
        </div>
        
        {/* ------- projects --------- */}

        <div className='overflow-hidden container'>
          <div className='flex gap-8 transition-transform duration-500 ease-in-out px-20' style={{transform:`translateX(-${(currentId * 100) / cardToShow}%)`}}>
            {projectsData.map(({id, title, price, location, image})=>(
              <div key={id} className='relative shrink-0 w-full sm:w-3/4 xl:w-1/4 lg:w-2/4'>
                <img src={image} alt={title} className='h-[100%] w-full'/>
                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                  <div className='inline-block bg-white w-3/4 px-2 py-1 shadow-2xl'>
                    <h2 className='font-semibold text-[.9rem] text-amber-700'>{title}</h2>
                    <p className='text-[.8rem] xl:text-s'>
                      {price} <span className='px-1'>|</span> {location}
                    </p>
                  </div>
                </div>
              </div>
            ))}             
          </div>
        </div>
        
        {/* -------- slide buttons -------- */}
        
        <div className='flex justify-end items-center mb-8 text-amber-700'>
          <button onClick={prevProject} className='text-4xl p-1' aria-label='previous project'>
            <i className="uil uil-arrow-circle-left cursor-pointer" alt='previous'></i>
          </button>
          <button onClick={nextProject} className='text-4xl p-1' aria-label='next project'>
            <i className="uil uil-arrow-circle-right cursor-pointer" alt='next'></i>
          </button>
        </div>
      </section>
  )
}

export default Projects
