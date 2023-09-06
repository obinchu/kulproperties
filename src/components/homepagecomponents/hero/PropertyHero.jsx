import React,{useContext} from 'react'
import { AppContext } from '../../../App';
import { useParams } from 'react-router-dom'

const PropertyHero = () => {
    const { id } = useParams();
    const propertyDetails = useContext(AppContext)
    // console.log(propertyDetails[0].properties[0].title)

  const selectedItem = propertyDetails[0].properties.find((item) => item.id == id);
//   console.log(selectedItem.id)
  const imageUrl = `${import.meta.env.BASE_URL}/${selectedItem.cover_image}`;

    return (
      <main
        className='w-full h-[80vh] flex bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <section className='w-full h-full flex flex-col  items-center justify-center bg-black bg-opacity-30'>
          <div className='flex flex-col md:mx-auto md:max-w-7xl w-full h-[35%] md:h-[40%] md:my-auto md:rounded md:items-center justify-center p-2 '>
            <h1 className='text-white text-5xl md:text-6xl fon-semibold'>Let's Get You a Home</h1>
            <p className='text-white mt-4'>Utilise the limited discount offer on kul properties today</p>
  
            
          </div>

          
        </section>
      </main>
    );
  };
export default PropertyHero