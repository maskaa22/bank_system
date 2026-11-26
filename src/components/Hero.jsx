import {start_cards} from '../assets';
import GetStartes from './GetStartes';
import Button from './Button';
import Reveal from './Reveal';

const avatarGradients = ['from-violet-500 to-fuchsia-500', 'from-pink-500 to-orange-400', 'from-indigo-500 to-violet-400'];

const Hero = () => (
    <section id='home' className='relative flex md:flex-row flex-col sm:pt-16 sm:pb-24 pt-8 pb-12'>
      <div className='flex-1 flex justify-center items-start flex-col relative z-[2]'>
        <Reveal>
          <div className='inline-flex items-center gap-3 py-[7px] pl-3 pr-4 glass rounded-full mb-6'>
            <span className='pulse-dot'/>
            <p className='font-body font-medium text-dimWhite text-[14px] leading-none'>
              <span className='text-white'>20% off</span> your first month · New accounts only
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-display font-bold ss:text-[64px] text-[42px] text-white ss:leading-[1.08] leading-[1.12] tracking-tight'>
              The Next <br className='sm:block hidden'/>
              <span className='text-gradient'>Generation</span>
              <br/>Payment Method.
            </h1>
            <div className='ss:flex hidden md:mr-4 mr-0 self-start mt-4'>
              <GetStartes/>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className='font-body font-normal text-dimWhite text-[18px] leading-[1.75] max-w-[480px] mt-7'>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
            We examine annual percentage rates, annual fees.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className='flex flex-row flex-wrap gap-4 mt-10'>
            <Button/>
            <Button variant='ghost'>See how it works</Button>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className='flex items-center gap-4 mt-12'>
            <div className='flex -space-x-3'>
              {avatarGradients.map((g) => (
                <span key={g} className={`w-9 h-9 rounded-full bg-gradient-to-br ${g} border-2 border-primary`}/>
              ))}
            </div>
            <p className='font-body text-[14px] text-dimWhite leading-snug'>
              <span className='text-white font-semibold'>3,800+</span> people already pay smarter with HooBank
            </p>
          </div>
        </Reveal>
      </div>

      <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative z-[2]'>
        <img src={start_cards} alt='bank cards' className='w-[100%] h-[100%] relative z-[5] float-slow md:ml-6'/>
      </div>

      <div className='ss:hidden flex justify-center items-center'>
        <GetStartes/>
      </div>
    </section>
  )

export default Hero
