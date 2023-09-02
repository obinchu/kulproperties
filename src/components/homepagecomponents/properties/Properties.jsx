import React from 'react'
import PropertyCards from './PropertyCards'

const Properties = () => {
  return (
<div className='w-full h-[80vh] flex bg-other'>
  <div className='flex flex-col md:max-w-7xl w-full h-[90%] m-auto rounded p-2'>
    <div className="flex flex-col mx-auto text-center h-[10%]">
      <span className='text-3xl text-primary font-medium'>Featured Properties</span>
      <span className='text-primary'>Specially selected products for you</span>
    </div>
    <div className="flex h-[80%] mt-3 items-center">
      <PropertyCards/>
    </div>
  </div>
</div>

  )
}

export default Properties