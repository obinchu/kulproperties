import React from 'react'
import PropertyHero from '../components/homepagecomponents/hero/PropertyHero'
import Details from '../propertydetails/Details'

const PropertyDetails = () => {
    
  return (
    <div className='flex flex-col mt-[3.5%]'>
        <PropertyHero/>
        <Details/>
    </div>
  )
}

export default PropertyDetails