import React,{useState,useEffect} from 'react'
import { CiLocationOn } from "react-icons/ci";
import {BiBed} from "react-icons/bi"
import {MdOutlineBathtub} from 'react-icons/md'
import {TfiRulerAlt2} from 'react-icons/tfi'


const PropertyCards = () => {

  
    const HouseDetails = [
        { County:"Kajiado",Country:"Kenya",Type: 'Condo',Location:"Kitengela",Beds:"3",Baths:"3",Size:5600,Price:"1300000",Status:"For Sale", image: './assets/images/house.jpg' },
        { County:"Kajiado",Country:"Kenya",Type: 'Apartment',Location:"Kitengela",Beds:"3",Baths:"3",Size:5600,Price:"1300000",Status:"For Sale", image: './assets/images/house1.jpg' },
        { County:"Kajiado",Country:"Kenya",Type: 'Flat',Location:"Kitengela",Beds:"3",Baths:"3",Size:5600,Price:"1300000",Status:"For Sale", image: './assets/images/house2.jpg' },
        { County:"Kajiado",Country:"Kenya",Type: 'Condo',Location:"Kitengela",Beds:"3",Baths:"3",Size:5600,Price:"1300000",Status:"For Sale", image: './assets/images/house3.jpg' },
        { County:"Kajiado",Country:"Kenya",Type: 'Condo',Location:"Kitengela",Beds:"3",Baths:"3",Size:5600,Price:"1300000",Status:"For Sale", image: './assets/images/house4.jpg' },
        { County:"Kajiado",Country:"Kenya",Type: 'Condo',Location:"Kitengela",Beds:"3",Baths:"3",Size:5600,Price:"1300000",Status:"For Sale", image: './assets/images/house5.jpg' },
        { County:"Kajiado",Country:"Kenya",Type: 'Condo',Location:"Kitengela",Beds:"3",Baths:"3",Size:5600,Price:"1300000",Status:"For Sale", image: './assets/images/house6.jpg' }

      ];
    
    
      return (
        <div className='w-full h-full md:h-[87%] flex flex-col rounded text-sm text-primary'>
          <div className='flex flex-col relative w-full max-w-6xl m-auto h-full rounded'>
            <div className='flex w-full h-full overflow-x-scroll no-scrollbar rounded p-1'>
              {HouseDetails.map((details, index) => (
                <div className="flex flex-shrink-0 w-[90%] md:w-[30%]  rounded-md flex-col mx-2">
                <div
                  key={index}
                  className='flex w-full h-[60%]  rounded-t-md bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${details.image})` }}
                >
                  <div className="flex flex-col p-2 w-full h-full justify-between" style={{ background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0,0,0,0.3))` }}>
                    <span className='rounded p-1 w-[23%] text-base justify-center bg-red-500 text-white flex'>{details.Status}</span>
                    <span className=' text-white font-medium text-xl'>KES {details.Price}</span>
                    </div>  
                </div>
                <div className="flex flex-col bg-white w-full rounded-b-md h-[40%] p-2 md:p-4">
                    <span className='items-center  flex text-base text-red-500'>{details.Type}</span>
                    <span className='items-center  flex text-lg font-medium'>Renovated {details.Type}</span>
                    <div className='flex items-center'>
                    <span><CiLocationOn size={20}/></span>
                    <span className='ms-1'>{details.Location},</span>
                    <span className='ms-1'>{details.County},</span>
                    <span className='ms-1'>{details.Country}</span>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-2 py-2">
                        <span className='flex items-center'><BiBed size={25}/>{details.Beds}Bedrooms</span>
                        <span className='flex items-center'><MdOutlineBathtub size={25}/>{details.Baths}Bathrooms</span>
                        <span className='flex items-center'><TfiRulerAlt2 size={25}/>{details.Size}Sq ft</span>
                        <span className='flex items-center'><BiBed size={25}/>{details.Beds}Bedrooms</span>
             
                    </div>
                </div>
                </div>
               
              ))}
            </div>
          </div>

        </div>
        
      );
}

export default PropertyCards