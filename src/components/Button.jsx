import React from 'react';

const Button = ({ label, icon, fullWidth }) => {
  return (
    <button
      className={`flex  group
    justify-center items-center space-2
    px-7 py-4 border font-montserrat
    text-lg leading-none
    bg-coral-red rounded-full text-white
    border-coral-red ${fullWidth && 'w-full'}`}>
      <span>{label}</span>
      {icon != null && (
        <img
          src={icon}
          className='transition-all ease-in-out 
      duration-500 group-hover:translate-x-5 w-5 h-5 ml-2 rounded-full'
          alt=''
        />
      )}
    </button>
  );
};

export default Button;
