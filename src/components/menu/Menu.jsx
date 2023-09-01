import React from 'react'
import { Link } from 'react-router-dom'
import { RxCaretDown,RxCaretUp } from 'react-icons/rx'


const Menu = () => {

const headerElements = [{item:"Home"},{item:"Listing"},{item:"Property"},{item:"Pages"},{item:"Blog"},]

  
  return (
    <div className='w-[80%] pt-[15%]   h-full bg-slate-800 backdrop-blur-sm text-white text-center block  fixed '>
      <div className="w-full block h-full p-2   ">
        <div className="flex flex-col h-[60%]  my-auto  border-b- w-full  ">
        <div className='  text-2xl h-full  w-full '>
        {
                headerElements.map((element)=>{
                  return(
                    <li class="relative mx-1 p-2  items-center text-white group">
                    <span className="mx-2">{element.item}</span>
                    <span class="transition duration-300 flex group-hover:hidden">
                      <RxCaretDown size={25} />
                    </span>
                    <span class="transform -transition-transform duration-700 hidden group-hover:flex">
                      <RxCaretUp size={25} />
                      <div class="absolute  right-0 top-full  w-[200px]  bg-white border border-gray-300 rounded-lg  transform -transition-transform duration-700 ease-in-out group-hover:block">
                        <p>Content goes here...</p>
                        <p>Content goes here...</p>
                        <p>Content goes here...</p>
                      </div>
                      
                    </span>
                   
                  </li>
                  
                  
                  
                  )
                })
              }
          {/* <div className='flex flex-col hover:border-s-2 justify-center font-semibold hover:cursor-pointer hover:border-orange-400 h-[20%]'>
            <Link to="/" className='flex flex-col'>
              <span>HOME</span>
            <span className='text-sm'>description</span>
            </Link>
          
            </div>
          <div className='flex flex-col hover:border-s-2  justify-center font-semibold hover:cursor-pointer hover:border-orange-400 h-[20%] md:h-[15%] md:m-3 p-1'>
            <span>ABOUT US</span>
            <span className='text-sm'>description</span>

            </div>
          <div className='flex flex-col hover:border-s-2 justify-center font-semibold hover:cursor-pointer hover:border-orange-400 h-[20%] md:h-[15%] md:m-3 p-1'>
            <span>SERVICES</span>
            <span className='text-sm'>description</span>

            </div>
          <div className='flex flex-col hover:border-s-2 font-semibold hover:cursor-pointer justify-center hover:border-orange-400 h-[20%] md:h-[15%] md:m-3 p-1'>
            <span>CONNECTIONS</span>
            <span className='text-sm'>description</span>

            </div>
          <div className='flex flex-col hover:border-s-2 justify-center font-semibold hover:cursor-pointer hover:border-orange-400 h-[20%] md:h-[15%] md:m-3 p-1'>
            <span>QUICK LINKS</span>
            <span className='text-sm'>description</span>

            </div> */}
        </div>
      </div>
      <div className="flex md:w-[40%] w-full h-[30%] md:h-full"></div>
      </div>
      
        
    </div>
  )
}

export default Menu