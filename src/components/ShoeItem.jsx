import React from 'react';

const ShoeItem = ({ img, changeSelectedShoe, bigShoeImg }) => {
  const handleChange = () => {
    if (bigShoeImg !== img.bigShoe) {
      changeSelectedShoe(img.bigShoe);
    }
  };
  return (
    <div
      onClick={handleChange}
      className={`border-2 rounded-xl cursor-pointer
      max-sm:flex-1
  transition-all ease-in-out duration-300
  ${bigShoeImg === img ? 'border-coral-red' : 'border-transparent'}
  `}>
      <div
        className='flex justify-center items-center bg-center
      bg-cover
      sm:w-40 sm:h-40 rounded-xl max-sm:p-4
      bg-card'>
        <img
          className='object-contain'
          src={img.thumbnail}
          width={127}
          height={103}
          alt=''
        />
      </div>
    </div>
  );
};

export default ShoeItem;
