import React from 'react'
import { Link } from 'react-router-dom'
import { RxCaretRight } from 'react-icons/rx'


const Menu = () => {

const headerElements = [{item:"Home"},{item:"Listing"},{item:"Property"},{item:"Pages"},{item:"Blog"},]

  
  return (
    <div className='w-[80%] pt-[15%]   h-full bg-primary backdrop-blur-sm text-white text-center block  fixed '>
      <div className="w-full block h-full p-2   ">
        <div className="flex flex-col h-[60%]  my-auto  border-b- w-full  ">
        <div className='  text-xl h-full  w-full '>
        {
                headerElements.map((element,i)=>{
                  return(
                    <li key={i} className="flex mx-1 p-2  items-center text-white justify-between">
                    <span className="mx-2">{element.item}</span>
                    <span className="transition duration-300 flex">
                      <RxCaretRight size={25} />
                    </span>
                  </li>
                  
                  
                  
                  )
                })
              }

          
        </div>
      </div>
      <div className="flex md:w-[40%] w-full h-[30%] md:h-full"></div>
      </div>
      
        
    </div>
  )
}

export default Menu