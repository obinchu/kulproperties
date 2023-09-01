import React from 'react';

const Hero = () => {
  const imageUrl = `${import.meta.env.BASE_URL}./assets/images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg`;

  return (
    <main
      className='w-full h-[100vh] flex bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <section className='w-full h-full flex items-center justify-center bg-black bg-opacity-30'>
        <div className='block md:flex md:mx-auto md:max-w-7xl w-full h-full md:h-[90%] md:my-auto rounded items-center justify-center'>
          <h1 className='text-white text-4xl font-bold'>Welcome to Our Website</h1>
          <p className='text-white mt-4'>Discover amazing things with us.</p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
