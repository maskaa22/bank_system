import styles from '../style';
import {feedback} from '../constans';
import FeedbackCard from './FeedbackCard';
import Reveal from './Reveal';

const Tastimonials = () => (
    <section id='clients' className={`${styles.paddingY} flex justify-center items-center flex-col relative`}>

      <div className='aurora aurora-violet z-[0] w-[50%] h-[50%] -right-[30%] top-[10%]'/>

      <div className='w-full flex justify-between items-end md:flex-row flex-col sm:mb-14 mb-8 relative z-[1] gap-6'>
        <Reveal className='w-full'>
          <span className={styles.eyebrow}><span className='w-6 h-px bg-secondary'/>Testimonials</span>
          <h2 className={styles.heading2}>
            What people are <br className='sm:block hidden'/> <span className='text-gradient'>saying about us</span></h2>
        </Reveal>
        <Reveal className='w-full' delay={120}>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </Reveal>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {
          feedback.map((card, i) => (
            <Reveal key={card.id} delay={i * 120}>
              <FeedbackCard {...card}/>
            </Reveal>
          ))
        }
      </div>
    </section>
  )

export default Tastimonials
