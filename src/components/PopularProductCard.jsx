import React from 'react';
import { star } from '@/assets/icons';
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div
      className='flex flex-1 
  flex-col 
  w-full 
  max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div
        className='mt-8 flex 
      justify-start  items-center
       space-x-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p
          className='
       font-montserrat 
       text-xl leading-normal 
       text-slate-gray'>
          ({getRandomIntInclusive(0, 5)})
        </p>
      </div>
      <h3
        className='mt-2 text-2xl 
      leading-normal font-semibold 
      font-palanquin'>
        {name}
      </h3>
      <p
        className='mt-2 font-semibold 
      font-montserrat text-coral-red 
      text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
