import React from 'react'
import PropertyCards from './PropertyCards'

const Properties = () => {
  return (
<div className='w-full md:h-[80vh] h-[90vh] flex bg-other'>
  <div className='flex flex-col md:max-w-7xl w-full h-[90%] m-auto rounded p-2'>
    <div className="flex flex-col mx-auto text-center h-[10%]">
      <span className='text-3xl text-primary font-medium'>Featured Properties</span>
      <span className='text-primary'>Specially selected properties for you</span>
    </div>
    <div className="flex flex-col h-[80%] mt-3 items-center">
      <PropertyCards/>
      <span className='m-auto mt-4  border border-primary rounded text-primary rouded p-2 text-base hover:bg-primary hover:text-white hover:cursor-pointer'>Explore Properties</span>
    </div>
  </div>
</div>

  )
}

export default Properties