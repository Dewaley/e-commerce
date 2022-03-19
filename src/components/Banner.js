import React from 'react'

const Banner = () => {
  return (
    <div className='h-60 sm:h-80 md:h-96 bg-hero-background bg-cover bg-no-repeat flex flex-col justify-center px-4  text-white '>
     <p className='uppercase text-4xl sm:text-6xl'>New Arrivals</p>
     <p className='text-xl sm:text-3xl'>Check out all of the trends</p>
    </div>
  )
}

export default Banner