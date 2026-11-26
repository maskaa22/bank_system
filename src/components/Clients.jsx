import {clients} from '../constans';

const Clients = () => {
  // Duplicate the list so the marquee loops seamlessly
  const loop = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className='my-6'>
      <p className='text-center font-body text-[13px] uppercase tracking-[0.2em] text-dimWhite mb-8'>Trusted by teams worldwide</p>
      <div className='marquee overflow-hidden w-full'>
        <div className='marquee-track'>
          {loop.map((client, i) => (
            <div key={`${client.id}-${i}`} className='flex justify-center items-center sm:min-w-[240px] min-w-[160px] px-6'>
              <img src={client.logo} className='sm:w-[160px] w-[100px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300' alt='client'/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
