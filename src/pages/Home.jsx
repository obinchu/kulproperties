import React,{useState,useEffect} from 'react'
import Hero from '../components/homepagecomponents/hero/Hero'
import Properties from '../components/homepagecomponents/properties/Properties'

const Home = () => {
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
    <div className='flex flex-col'>
      <Hero/>
      <Properties/>
    </div>
  )
}

export default Home