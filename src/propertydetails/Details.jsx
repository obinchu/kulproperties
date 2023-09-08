import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App'

const Details = () => {
    const { slug } = useParams();

    const propertyDetails = useContext(AppContext)

  const selectedItem = propertyDetails[0].properties.find((item) => item.slug == slug);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });}


  return (
    <div className="w-full h-[265vh] text-primary lg:h-[140vh] flex bg-other text-sm">
    <div className="flex flex-col lg:flex-row lg:max-w-6xl w-full h-[100%] m-auto mt-2 rounded p-2 justify-between items-center">
    <div className="flex flex-col w-full lg:w-[63%] h-full justify-between p-1 ">
       {selectedItem.category =='commercial' ?
        <div className="flex flex-col bg-white rounded w-[95%] mx-auto h-full">
            <section className="flex flex-col p-2 border-b">
            <div className="flex  w-[100%] flex-col lg:flex-row  justify-between text-lg lg:text-3xl font-normal p-1">
            
                    <span className='text-lg' >{selectedItem.title}</span>
            

                <span className='lg:m-0.5 lg:p-2 text-lg'>KES {selectedItem.price}</span>

            </div>
            <div className="flex w-[100%] items-center p-1">
            <span className='lg:m-0.5 lg:p-2'>Location: {selectedItem.location}</span>
            </div>
            </section>
            <section className='flex flex-col p-2 h-[50%] lg:h-[30%] border-b'>

                <div className="flex lg:hidden flex-col  p-2">
                    <div className="flex ">
                    {/* <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.property_type}</span> */}
                    {/* <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bathrooms} bathrooms</span> */}
                    </div>
                   
                    <div className="flex ">
                    {/* <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bedrooms} bedrooms</span> */}
                    <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.area}sq ft</span>
                        </div>
                        
                       
                </div>
                <div className="hidden lg:flex   p-2">
                    
                    <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.property_type}</span>
                    {/* <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bathrooms} bathrooms</span> */}
                    {/* <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bedrooms} bedrooms</span> */}
                    <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.area}sq ft</span>
                     
                        
                       
                </div>

                <div className='flex flex-col p-2 h-[100%] bg-white z-20 overflow-hidden'>
                    <span className='text-lg my-4'>Description</span>
                    <p className='text-sm '>{selectedItem.description}</p>
                </div>

            </section>
            <section className='flex flex-col w-full h-[20%] p-2 border-b'>
                <span className='text-lg m-1 my-2'>Property Details</span>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-2 h-[90%] m-1 p-2">
                <span className='flex'>Property Type: <span className='font-medium mx-1'>{selectedItem.property_type}</span></span>
                <span className='flex'>Property Price: <span className='font-medium mx-1'>KES {selectedItem.price}</span></span>
                <span className='flex'>Property Size: <span className='font-medium mx-1'>{selectedItem.area} Sq ft</span></span>
                {/* <span className='flex'>No.of Bedrooms: <span className='font-medium mx-1'> {selectedItem.unit.bedrooms}</span></span> */}
                {/* <span className='flex'>No.of Bathrooms:<span className='font-medium mx-1'>{selectedItem.unit.bathrooms}</span></span> */}
                <span className='flex'>Property Status: <span className='font-medium mx-1'>{selectedItem.status}</span></span>
                </div>
            </section>
            <section className='flex flex-col w-full h-[20%] p-2 border-b'>
                <span className='text-lg m-1 my-2'>Amenities</span>
                <div className="grid lg:grid-cols-4 lg:grid-rows-3 gap-2 h-[90%] m-1 p-2">
                {selectedItem.amenities.map((item) => (
                    <div
                      key={item}
                      className="flex text-primary/50 items-center text-sm"
                    >
                      <input
                        className="w-5 h-5 mx-2 bg-primary"
                        type="checkbox"
                        checked
                      />
                      <label htmlFor="">{item}</label>
                    </div>
                  ))}
                </div>
            </section>
            <section className='flex flex-col w-full h-[20%] p-2'>
                <span className='text-lg m-1 my-2'>Features</span>
                <div className="grid md:grid-cols-4 md:grid-rows-3 gap-2 h-[90%] m-1 p-2">
                {selectedItem.amenities.map((item) => (
                    <div
                      key={item}
                      className="flex text-primary/50 items-center text-sm"
                    >
                      <input
                        className="w-5 h-5 mx-2"
                        type="checkbox"
                      />
                      <label htmlFor="">{item}</label>
                    </div>
                  ))}
                </div>
            </section>

        </div>
        :
        <div className="flex flex-col bg-white rounded w-[95%] mx-auto h-full">
        <section className="flex flex-col p-2 border-b">
        <div className="flex  w-[100%] flex-col lg:flex-row  justify-between text-base lg:text-3xl font-normal p-1">
        
                <span className='text-lg'>{selectedItem.title}</span>
        

            <span className='lg:m-0.5 lg:p-2 text-lg'>KES: {selectedItem.unit.price}</span>

        </div>
        <div className="flex w-[100%] items-center p-1">
        <span className='lg:m-0.5 lg:p-2'>Location: {selectedItem.location}</span>
        </div>
        </section>
        <section className='flex flex-col p-2 h-[50%] lg:h-[30%] border-b'>

            <div className="flex lg:hidden flex-col  p-2">
                <div className="flex ">
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.property_type}</span>
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bathrooms} bathrooms</span>
                </div>
               
                <div className="flex ">
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bedrooms} bedrooms</span>
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.area}sq ft</span>
                    </div>
                    
                   
            </div>
            <div className="hidden lg:flex   p-2">
                
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.property_type}</span>
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bathrooms} bathrooms</span>
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bedrooms} bedrooms</span>
                <span className=' w-[50%] lg:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.area}sq ft</span>
                 
                    
                   
            </div>

            <div className='flex flex-col p-2 h-[100%] bg-white z-20 overflow-hidden'>
                <span className='text-lg my-4'>Description</span>
                <p className='text-sm '>{selectedItem.description}</p>
            </div>

        </section>
        <section className='flex flex-col w-full h-[20%] p-2 border-b'>
            <span className='text-lg m-1 my-2'>Property Details</span>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-2 h-[90%] m-1 p-2">
            <span className='flex'>Property Type: <span className='font-medium mx-1'>{selectedItem.property_type}</span></span>
            <span className='flex'>Property Price: <span className='font-medium mx-1'>KES {selectedItem.unit.price}</span></span>
            <span className='flex'>Property Size: <span className='font-medium mx-1'>{selectedItem.unit.area} Sq ft</span></span>
            <span className='flex'>No.of Bedrooms: <span className='font-medium mx-1'> {selectedItem.unit.bedrooms}</span></span>
            <span className='flex'>No.of Bathrooms:<span className='font-medium mx-1'>{selectedItem.unit.bathrooms}</span></span>
            <span className='flex'>Property Status: <span className='font-medium mx-1'>{selectedItem.status}</span></span>
            </div>
        </section>
        <section className='flex flex-col w-full h-[20%] p-2 border-b'>
            <span className='text-lg m-1 my-2'>Amenities</span>
            <div className="grid lg:grid-cols-4 lg:grid-rows-3 gap-2 h-[90%] m-1 p-2">
            {selectedItem.amenities.map((item) => (
                <div
                  key={item}
                  className="flex text-primary/50 items-center text-sm"
                >
                  <input
                    className="w-5 h-5 mx-2 bg-primary"
                    type="checkbox"
                    checked
                  />
                  <label htmlFor="">{item}</label>
                </div>
              ))}
            </div>
        </section>
        <section className='flex flex-col w-full h-[20%] p-2'>
            <span className='text-lg m-1 my-2'>Features</span>
            <div className="grid md:grid-cols-4 md:grid-rows-3 gap-2 h-[90%] m-1 p-2">
            {selectedItem.amenities.map((item) => (
                <div
                  key={item}
                  className="flex text-primary/50 items-center text-sm"
                >
                  <input
                    className="w-5 h-5 mx-2"
                    type="checkbox"
                  />
                  <label htmlFor="">{item}</label>
                </div>
              ))}
            </div>
        </section>

    </div>
    }
    </div>
    <div className="flex flex-col w-full lg:w-[35%] h-full  p-1 ">
    <div className="flex flex-col bg-white rounded w-[95%] h-[58%] md:h-[45%] mx-auto">
        <span className='text-primary text-xl m-2 p-2'>Schedule Appointment</span>
        <form className='flex flex-col p-2' action="">
            <input className='border p-2 rounded mx-auto w-[95%] my-2' type="date" name="" id="" />
            <input className='border p-2 rounded mx-auto my-2 w-[95%]' type="time" name="" id="" placeholder='Time'/>
            <input className='border p-2 rounded m-2' type="text" placeholder='Full Name' />
            <input className='border p-2 rounded m-2' type="number" placeholder='Phone Number' />
            <input className='border p-2 rounded m-2' type="email" name="" id="" placeholder='Email Address' />
            <textarea className='border rounded p-1 text-sm m-2' name="" id="" cols="30" rows="5" placeholder='Message'></textarea>
            <button className='p-3 bg-primary text-white rounded m-2'>Submit</button>
        </form>
    </div>

    </div>
    </div>
    </div>
  )
}

export default Details