import {logo} from '../assets';
import {footerLinks, socialMedia} from '../constans';

const Footer = () => (
    <section className='flex justify-center items-center sm:py-16 py-8 flex-col border-t border-white/10'>
      <div className='flex justify-center items-start md:flex-row flex-col mb-10 w-full'>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img  src={logo} alt='hoobank' className='w-[200px] h-[54px] object-contain object-left'/>
          <p className='font-body font-normal text-dimWhite text-[16px] leading-[1.75] mt-4 max-w-[310px]'>
            A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {
            footerLinks.map((footerLink) => (
              <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-display font-semibold text-[16px] leading-[27px] text-white'>{footerLink.title}</h4>
                <ul className='list-none mt-4'>
                  {
                    footerLink.links.map((link, index) => (
                      <li key={link.name} className={`font-body font-normal text-[15px] leading-[24px] text-dimWhite hover:text-secondary transition-colors
                      cursor-pointer ${index !== footerLink.links.length-1 ? 'mb-3' : 'mb-0'}`}>{link.name}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-white/10'>
        <p className='font-body font-normal text-center text-[15px] leading-[27px] text-dimWhite'>2021 HooBank. All Rights Reserved.</p>
        <div className='flex flex-row md:mt-0 mt-6 gap-3'>
          {
            socialMedia.map((social) => (
              <a key={social.id} href={social.link} target='_blank' rel='noreferrer'
                className='w-10 h-10 rounded-full glass flex justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:border-violet/60'>
                <img src={social.icon} alt={social.id} className='w-[18px] h-[18px] object-contain'/>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )

export default Footer
