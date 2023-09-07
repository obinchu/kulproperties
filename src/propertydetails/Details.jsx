import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App'

const Details = () => {
    const { slug } = useParams();

    const propertyDetails = useContext(AppContext)

  const selectedItem = propertyDetails[0].properties.find((item) => item.slug == slug);
  // State to track the current scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle the scroll event
  const handleScroll = () => {
    // Update the scroll position when the user scrolls
    setScrollPosition(window.scrollY);
  };

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top left corner
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });}


  return (
    <div className="w-full h-[265vh]  md:h-[140vh] flex bg-other text-sm">
    <div className="flex flex-col md:flex-row md:max-w-6xl w-full h-[100%] m-auto mt-2 rounded p-2 justify-between items-center">
    <div className="flex flex-col w-full md:w-[63%] h-full justify-between p-1 ">
        <div className="flex flex-col bg-white rounded w-[95%] mx-auto h-full">
            <section className="flex flex-col p-2 border-b">
            <div className="flex  w-[100%] flex-col md:flex-row  justify-between text-xl md:text-3xl font-normal p-1">
            
                    <span >{selectedItem.title}</span>
            

                <span className='md:m-0.5 md:p-2'>Price : {selectedItem.unit.price} KES</span>

            </div>
            <div className="flex w-[100%] items-center p-1">
            <span className='md:m-0.5 md:p-2'>{selectedItem.location}</span>
            </div>
            </section>
            <section className='flex flex-col p-2 h-[50%] md:h-[30%] border-b'>

                <div className="flex md:hidden flex-col  p-2">
                    <div className="flex ">
                    <span className=' w-[50%] md:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.property_type}</span>
                    <span className=' w-[50%] md:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bathrooms} bathrooms</span>
                    </div>
                   
                    <div className="flex ">
                    <span className=' w-[50%] md:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bedrooms} bedrooms</span>
                    <span className=' w-[50%] md:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.area}sq ft</span>
                        </div>
                        
                       
                </div>
                <div className="hidden md:flex   p-2">
                    
                    <span className=' w-[50%] md:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.property_type}</span>
                    <span className=' w-[50%] md:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bathrooms} bathrooms</span>
                    <span className=' w-[50%] md:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.bedrooms} bedrooms</span>
                    <span className=' w-[50%] md:w-[20%] justify-center flex rounded bg-other/30 p-2 m-2'>{selectedItem.unit.area}sq ft</span>
                     
                        
                       
                </div>

                <div className='flex flex-col p-2 h-[100%] bg-white z-20 overflow-hidden'>
                    <span className='text-lg my-4'>Description</span>
                    <p>{selectedItem.description}</p>
                </div>

            </section>
            <section className='flex flex-col w-full h-[20%] p-2 border-b'>
                <span className='text-lg m-1 my-2'>Property Details</span>
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-2 h-[90%] m-1 p-2">
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
                <div className="grid md:grid-cols-4 md:grid-rows-3 gap-2 h-[90%] m-1 p-2">
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
    </div>
    <div className="flex flex-col w-full md:w-[35%] h-full  p-1 ">
    <div className="flex flex-col bg-white rounded w-[95%] h-[40%] mx-auto">

    </div>

    </div>
    </div>
    </div>
  )
}

export default Details