import React from 'react'
import Hero from '../components/homepagecomponents/hero/Hero'
import Properties from '../components/homepagecomponents/properties/Properties'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <Properties/>
    </div>
  )
}

export default Home