import styles from '../style';
import {features} from '../constans';
import Button from './Button';
import Reveal from './Reveal';

const FeatureCard = ({icon, title, content, index}) => (
  <Reveal delay={index * 120} className='w-full'>
    <div className={`flex flex-row items-start p-6 rounded-[24px] ${index !== features.length-1 ? 'mb-5' : 'mb-0'} glow-card`}>
      <div className='w-[60px] h-[60px] shrink-0 rounded-2xl flex justify-center items-center bg-dimBlue border border-violet/30'>
        <img src={icon} alt='icon' className='w-[46%] h-[46%] object-contain'/>
      </div>
      <div className='flex-1 flex flex-col ml-5'>
        <h4 className='font-display font-semibold text-white text-[19px] leading-[1.3] mb-1'>{title}</h4>
        <p className='font-body font-normal text-dimWhite text-[15px] leading-[1.7]'>{content}</p>
      </div>
    </div>
  </Reveal>
)

const Business = () => {
  return (
    <section id='features' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className='flex-1 flex justify-center items-start flex-col'>
        <Reveal>
          <span className={styles.eyebrow}><span className='w-6 h-px bg-secondary'/>Features</span>
          <h2 className={styles.heading2}>
            You do the business, <br className='sm:block hidden'/> <span className='text-gradient'>we’ll handle the money.</span></h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money.
            But with hundreds of credit cards on the market.
          </p>
          <Button styles='mt-10'/>
        </Reveal>
      </div>

      <div className='flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-12 relative flex-col'>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
          ))}
      </div>
    </section>
  )
}

export default Business
