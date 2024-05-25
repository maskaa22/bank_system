import {clients} from '../constans';

const Clients = () => 
  (
    <section className='flex justify-center items-center my-4'>
      <div className='flex justify-center items-center flex-wrap w-full'>
        {
          clients.map((client) => (
            <div key={client.id} className='flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] -ml-5'>
              <img src={client.logo} className='sm:w-[192px] w-[100px] object-contain' alt='client'/>
            </div>
          ))
        }
      </div>
    </section>
  )


export default Clients