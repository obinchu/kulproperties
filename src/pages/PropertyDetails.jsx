import React,{useState,useEffect} from 'react'
import PropertyHero from '../components/homepagecomponents/hero/PropertyHero'
import Details from '../propertydetails/Details'

const PropertyDetails = () => {
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
    <div className='flex flex-col mt-[3.5%]'>
        <PropertyHero/>
        <Details/>
    </div>
  )
}

export default PropertyDetails