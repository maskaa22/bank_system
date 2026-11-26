import styles from '../style';
import {apple, card_img, google} from '../assets';
import Reveal from './Reveal';

const Billing = () => {
  return (
    <section id='product' className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}>
      <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
        <Reveal className='relative z-[5]'>
          <img src={card_img} alt='billing' className='w-[100%] h-[100%] glow-shadow'/>
        </Reveal>
        <div className='aurora aurora-violet z-[0] -left-[10%] top-[10%] w-[60%] h-[60%]'/>
        <div className='aurora aurora-pink z-[0] right-0 bottom-0 w-[45%] h-[45%]'/>
      </div>
      <div className='flex-1 flex justify-center items-start flex-col'>
        <Reveal>
          <span className={styles.eyebrow}><span className='w-6 h-px bg-secondary'/>Product</span>
          <h2 className={styles.heading2}>
            Easily control your <br className='sm:block hidden'/><span className='text-gradient'>billing & invoicing.</span></h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
            Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>

          <div className='flex flex-row flex-wrap gap-5 sm:mt-10 mt-6'>
            <img src={apple} alt='apple_store' className='w-[128px] h-[42px] object-contain cursor-pointer transition-transform duration-300 hover:-translate-y-1'/>
            <img src={google} alt='google_play' className='w-[128px] h-[42px] object-contain cursor-pointer transition-transform duration-300 hover:-translate-y-1'/>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Billing
