import Reveal from './Reveal';

const CTA = () => (
  <Reveal>
    <section className='relative overflow-hidden flex justify-between items-center sm:my-24 my-12 sm:px-16 px-6 sm:py-16 py-10 sm:flex-row flex-col
     rounded-[32px] border border-white/15 bg-gradient-to-br from-violet via-[#b83ae0] to-blush'>
      <div className='absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-white/20 blur-3xl'/>
      <div className='absolute -bottom-32 left-1/3 w-[320px] h-[320px] rounded-full bg-amber/30 blur-3xl'/>
      <div className='flex-1 flex flex-col relative z-[1]'>
        <h2 className='font-display font-bold xs:text-[44px] text-[34px] text-white xs:leading-[1.15] leading-[1.2] tracking-tight w-full'>
          Let’s try our service now!</h2>
        <p className='font-body font-normal text-white/80 text-[17px] leading-[1.75] max-w-[470px] mt-4'>
          Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className='flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-8 relative z-[1]'>
        <button type='button' className='py-4 px-8 rounded-[14px] bg-white text-[#3b0a6b] font-display font-semibold text-[16px]
          shadow-[0_14px_40px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer'>
          Get Started
        </button>
      </div>
    </section>
  </Reveal>
)

export default CTA
