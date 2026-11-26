import { useState } from 'react';
import { logo, close, menu } from '../assets';

import { navLinks } from '../constans';
import Button from './Button';

const Navbar = () => {

  const [toogle, setToogle] = useState(false);

  return (
    <nav className='w-full flex py-5 justify-between items-center navbar relative z-20'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-center items-center flex-1 gap-10'>
        {
          navLinks.map((nav) => (
            <li key={nav.id}>
              <a href={`#${nav.id}`} className='nav-link'>{nav.title}</a>
            </li>
          ))
        }
      </ul>

      <div className='sm:block hidden'>
        <Button styles='!py-[10px] !px-5 !text-[14px] !rounded-[12px]'>Sign Up</Button>
      </div>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toogle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToogle(!toogle)} />

        <div className={`${toogle ? 'flex' : 'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-2xl sidebar !bg-[#120a24] border border-white/15 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.8)] z-50`}>
          <ul className='list-none flex flex-col justify-end items-start flex-1 gap-4'>
            {
              navLinks.map((nav) => (
                <li key={nav.id} className='text-white font-body text-[16px]'>
                  <a href={`#${nav.id}`} onClick={() => setToogle(false)}>{nav.title}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
