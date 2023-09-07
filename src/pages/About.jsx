import React,{useState,useEffect} from 'react'

const About = () => {
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
      const imageUrl = `${import.meta.env.BASE_URL}./assets/images/house1.jpg`;
  return (
    <div className='flex flex-col'>
      <main
      className='w-full h-[50vh] md:h-[50vh] mt-[3.5%]  flex bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <section className='w-full h-full flex flex-col bg-black/50 items-center justify-center'>
     
      <div className='flex flex-col md:mx-auto md:max-w-6xl w-full md:my-auto md:rounded  justify-center p-2 '>
         <span className='text-other font-medium text-3xl'>About Us</span>
         </div>
      </section>
    </main>
    <div className='flex flex-col md:mx-auto md:max-w-6xl w-full h-[35%] md:h-[60vh] md:my-auto md:rounded p-2 '>
         <div className="flex flex-col h-full w-full">
            <span className='w-full h-[10%] text-2xl p-2 text-center font-medium mx-auto'>We Exist To suite your Needs</span>
            <div className="flex h-[90%] w-full">
               <div className="flex flex-col  h-full p-1 w-full m-auto md:max-w-3xl">
                <p className='md:m-2 p-2 text-sm w-full md:text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam, provident eveniet rem nam tempore nemo doloribus at, voluptates, quibusdam doloremque totam vel libero dolores. Molestias, nam nulla! Voluptas, provident! Minima corrupti tempore quas, molestias, modi dolorem qui magnam a facilis, velit accusantium architecto culpa! Excepturi eligendi dolore ad blanditiis.</p>
                <p className='md:m-2 p-2 text-sm w-full md:text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam, provident eveniet rem nam tempore nemo doloribus at, voluptates, quibusdam doloremque totam vel libero dolores. Molestias, nam nulla! Voluptas, provident! Minima corrupti tempore quas, molestias, modi dolorem qui magnam a facilis, velit accusantium architecto culpa! Excepturi eligendi dolore ad blanditiis.</p>
                <p className='md:m-2 p-2 text-sm w-full md:text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit ullam, provident eveniet rem nam tempore nemo doloribus at, voluptates, quibusdam doloremque totam vel libero dolores. Molestias, nam nulla! Voluptas, provident! Minima corrupti tempore quas, molestias, modi dolorem qui magnam a facilis, velit accusantium architecto culpa! Excepturi eligendi dolore ad blanditiis.</p>
               </div>
            </div>
         </div>
         </div>
    </div>
  )
}

export default About