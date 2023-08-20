import React, { useState } from 'react';
import Button from './Button';
import { arrowRight } from '@/assets/icons';
import { statistics } from '@/data';
import { bigShoe1 } from '@/assets/images';
import { shoes } from '@/data';
import ShoeItem from './ShoeItem';
const Hero = () => {
  const [selected, setSelected] = useState(shoes[0].bigShoe);
  return (
    <section
      id='home'
      className='w-full flex
xl:flex-row flex-col
justify-center min-h-screen
space-10 max-container my-10'>
      <div
        className='relative
xl:w-2/5 flex flex-col
justify-center items-start
w-full max-xl:padding-x pt-28'>
        <p
          className='text-xl
font-montserrat
text-coral-red'>
          New Summer Collections
        </p>
        <h1
          className='mt-10
font-palanquin sm:text-8xl

max-sm:leading-[82]
text-2xl
font-bold'>
          <span
            className='xl:bg-white
xl:whitespace-nowrap
relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span>
            <span
              className='text-coral-red
inline-block mt-3'>
              Nike
            </span>
            Shoes
          </span>
        </h1>
        <p
          className=' font-montserrat
          text-slate-gray text-lg
          leading-8 mt-6 sm:mb-14
          sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={'Shop now'} icon={arrowRight} />
        <div
          className='flex
justify-starts items-start
flex-wrap w-full mt-20
space-x-16'>
          {statistics.map((item) => (
            <div key={item.label}>
              <p className='text-4xl font-palanquin font-bold'>{item.value}</p>
              <p
                className='leading-7 font-montserrat
              text-slate-gray'>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className='relative flex-1 flex justify-center
      items-center xl:min-h-screen bg-center bg-hero
      bg-primary bg-cover'>
        <img
          src={selected}
          alt='Shoe image'
          className='object-contain z-10 relative'
          width={610}
          height={500}
        />
        <div
          className='flex flex-row items-center 
          justify-center 
          
           sm:space-x-9 
          space-4 absolute
          -bottom-32 sm:-bottom-44 xl:bottom-6 
            max-sm:px-6 
        '>
          {shoes.map((shoe) => (
            <ShoeItem
              img={shoe}
              changeSelectedShoe={() => {
                setSelected(shoe.bigShoe);
              }}
              bigShoeImg={selected}
              key={JSON.stringify(shoe)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
