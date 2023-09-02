import React from 'react';
import Filter from '../../../features/filter/Filter';

const Hero = () => {
  const imageUrl = `${import.meta.env.BASE_URL}./assets/images/house1.jpg`;

  return (
    <main
      className='w-full h-[100vh] md:h-[100vh] flex bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <section className='w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-30'>
        <div className='flex flex-col md:mx-auto md:max-w-7xl w-full h-[35%] md:h-[40%] md:my-auto md:rounded md:items-center justify-end p-2 '>
          <h1 className='text-white text-5xl md:text-6xl fon-semibold'>Let's Get You a Home</h1>
          <p className='text-white mt-4'>Utilise the limited discount offer on kul properties today</p>

          
        </div>
        <div className='flex flex-col md:mx-auto md:max-w-7xl w-full h-[65%] md:h-[50%] md:my-auto md;rounded items-center justify-start p-2 '>
            <Filter />
        </div>
        
      </section>
    </main>
  );
};

export default Hero;
