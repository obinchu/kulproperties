import React,{useState,useEffect,useContext} from 'react'
import { CiLocationOn } from "react-icons/ci";
import {BiBed} from "react-icons/bi"
import {MdOutlineBathtub} from 'react-icons/md'
import {TfiRulerAlt2} from 'react-icons/tfi'
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';



const PropertyCards = () => {

  const propertyData = useContext(AppContext)
  

    
    
      return (
        <div className='w-full h-full md:h-[87%] flex flex-col rounded text-sm text-primary'>
          <div className='flex flex-col relative w-full max-w-6xl m-auto h-full rounded'>
            <div className='flex w-full h-full overflow-x-scroll no-scrollbar rounded p-1'>
              {propertyData[0].properties.map((details, index) => (
                <Link to={`/kulproperties/propertydetails/${details.id}`} key={index} className="flex flex-shrink-0 w-[90%] md:w-[30%] rounded-md flex-col mx-2">

                <div
                  key={index}
                  className='flex w-full h-[60%]  rounded-t-md bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${details.cover_image})` }}
                >
                  <div className="flex flex-col p-2 w-full h-full justify-between" style={{ background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0,0,0,0.3))` }}>
                    <span className='rounded p-1 w-[23%] text-base justify-center bg-red-500 text-white flex'>For {details.status}</span>
                    <span className=' text-white font-medium text-xl'>KES {details.unit.price}</span>
                    </div>  
                </div>
                <div className="flex flex-col bg-white w-full rounded-b-md h-[40%] p-2 md:p-4">
                    <span className='items-center  flex text-base text-red-500'>{details.property_type}</span>
                    <span className='items-center  flex text-lg font-medium'>{details.title}</span>
                    <div className='flex items-center'>
                    <span><CiLocationOn size={20}/></span>
                    <span className='ms-1'>{details.location}</span>
                   
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 py-2">
                        <span className='flex items-center'><BiBed size={25}/>{details.unit.bedrooms}Bedrooms</span>
                        <span className='flex items-center'><MdOutlineBathtub size={25}/>{details.unit.bathrooms}Bathrooms</span>
                        <span className='flex items-center'><TfiRulerAlt2 size={25}/>{details.unit.area}Sq ft</span>
             
                    </div>
                </div>
                </Link>
               
              ))}
            </div>
          </div>

        </div>
        
      );
}

export default PropertyCards