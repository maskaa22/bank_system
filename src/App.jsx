import styles from './style';

import {Navbar, Hero, Stats, Billing, Business, CTA, CardDeal, Clients, Testimonials, Footer} from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden relative font-body'>
    {/* Ambient background */}
    <div className='absolute inset-x-0 top-0 h-[900px] grid-bg pointer-events-none'/>
    <div className='aurora aurora-violet w-[700px] h-[700px] -top-[260px] -left-[200px]'/>
    <div className='aurora aurora-pink w-[560px] h-[560px] top-[60px] -right-[200px]'/>
    <div className='aurora aurora-amber w-[420px] h-[420px] top-[520px] left-[30%] opacity-70'/>

    <div className={`${styles.paddingX} ${styles.flexCenter} relative z-30`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart} relative z-10`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexStart} relative z-10`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
    </div>

  </div>
);

export default App
