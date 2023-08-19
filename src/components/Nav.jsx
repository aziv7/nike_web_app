import React from 'react';
import { headerLogo } from '@/assets/images';
import { hamburger } from '@/assets/icons';
import { navLinks } from '@/data';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img src={headerLogo} width={130} height={29} alt='Nike logo' />
        </a>
        <ul className='flex-1 flex justify-center items-center space-x-16 max-lg:hidden'>
          {navLinks.map((e) => (
            <li key={e.label}>
              <a
                className='font-montserrat
                 leading-normal
                    text-lg
                text-slate-gray'
                href={e.href}>
                {e.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
