import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
const Error = () => {
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
      const imageUrl = `${import.meta.env.BASE_URL}./assets/images/erro2.jpg`;
  return (
    <main
    className='w-full h-[100vh] md:h-[100vh] mt-[3%] flex flex-col bg-cover bg-center bg-no-repeat'
  >
    <section className='w-full flex flex-col max-w-6xl m-auto h-[85%]  items-center justify-center '>
   
<div className='flex w-full h-[100%]  bg-contain bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}></div>      
    </section>
    <section className='flex h-[15%] items-center justify-center w-full'>
    <Link to="/kulproperties/" className='m-auto mt-4  border border-primary rounded text-primary rouded p-2 text-base hover:bg-primary hover:text-white hover:cursor-pointer'>Back</Link>
    </section>
  </main>
  )
}

export default Error