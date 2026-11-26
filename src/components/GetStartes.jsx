import {arrowUp} from '../assets';

const ringMask = 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))';

const GetStartes = () => (
    <div className='relative flex justify-center items-center w-[128px] h-[128px] rounded-full cursor-pointer group'>
      <div className='absolute inset-0 rounded-full bg-brand-gradient spin-slow opacity-90'
        style={{ WebkitMask: ringMask, mask: ringMask }}/>
      <div className='flex justify-center items-center flex-col glass w-[112px] h-[112px] rounded-full transition-transform duration-300 group-hover:scale-105'>
        <img src={arrowUp} className='w-[22px] h-[22px] object-contain mb-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' alt='arrow'/>
        <p className='font-display font-semibold text-[15px] leading-[18px] text-center'>
          <span className='text-gradient'>Get<br/>Started</span>
        </p>
      </div>
    </div>
  )

export default GetStartes
