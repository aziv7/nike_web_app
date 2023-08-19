import React from 'react';

const Hero = () => {
  return (
    <section
      id='home'
      className='w-full flex
xl:flex-row flex-col
justify-center min-h-screen
space-10 max-container'>
      <div
        className='relative
xl:w-2/5 flex flex-col
justify-center items-start
w-full max-xl:padding-x pt-28'>
        <p className='text-red-500'>New Summer Collections</p>
        <h1 className=' text-xl text-black font-semibold'>
          <span>The New Arrival</span>
          <br />
          <span>
            <span className='text-red-500'>Nike</span> Shoes
          </span>
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
      </div>
    </section>
  );
};

export default Hero;
