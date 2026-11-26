import {stats} from '../constans';
import Reveal from './Reveal';

const Stats = () => (
  <Reveal>
    <section className='glass rounded-[28px] grid sm:grid-cols-3 grid-cols-1 sm:divide-x divide-y sm:divide-y-0 divide-white/10 sm:mb-24 mb-12'>
      {stats.map((stat) => (
        <div key={stat.id} className='flex flex-col items-center justify-center text-center py-9 px-6'>
          <h4 className='font-display font-bold xs:text-[48px] text-[38px] leading-none text-gradient'>{stat.value}</h4>
          <p className='font-body font-medium text-[13px] tracking-[0.16em] text-dimWhite uppercase mt-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  </Reveal>
)

export default Stats
