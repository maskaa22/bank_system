import styles from '../style';
import {card_widgets} from '../assets';
import Button from './Button';
import Reveal from './Reveal';

const steps = ['Create your free account', 'Compare cards that fit you', 'Get approved in minutes'];

const CardDeal = () => (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className='flex-1 flex justify-center items-start flex-col'>
        <Reveal>
          <span className={styles.eyebrow}><span className='w-6 h-px bg-secondary'/>How it works</span>
          <h2 className={styles.heading2}>
            Find a better card deal <br className='sm:block hidden'/> <span className='text-gradient'>in few easy steps.</span></h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.</p>

          <ol className='list-none mt-8 flex flex-col gap-4'>
            {steps.map((step, i) => (
              <li key={step} className='flex items-center gap-4 font-body text-white text-[16px]'>
                <span className='w-9 h-9 rounded-full bg-brand-gradient flex justify-center items-center font-display font-semibold text-[14px] shadow-[0_8px_20px_-6px_rgba(217,70,239,0.7)]'>{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <Button styles='mt-10'/>
        </Reveal>
      </div>
      <div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-12 relative'>
        <Reveal className='relative z-[2] w-full'>
          <div className='relative w-full' style={{ aspectRatio: '1026 / 899' }}>
            {/* Animated rings behind the widgets */}
            <div className='orbit-layer'>
              <span className='orbit-pulse'/>
              <span className='orbit-pulse' style={{ animationDelay: '2s' }}/>
              <span className='orbit-ring orbit-ring-solid'/>
              <span className='orbit-ring orbit-ring-dashed'/>
              <span className='orbit-ring orbit-ring-conic'/>
            </div>
            <img src={card_widgets} alt='card widgets' className='relative z-[2] w-full h-full tint-violet float-slow'/>
          </div>
        </Reveal>
        <div className='aurora aurora-violet z-[0] w-[70%] h-[70%]'/>
      </div>
    </section>
  )

export default CardDeal
