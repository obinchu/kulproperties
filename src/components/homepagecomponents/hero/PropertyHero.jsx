import React,{useContext} from 'react'
import { AppContext } from '../../../App';
import { useParams } from 'react-router-dom'

const PropertyHero = () => {
    const { slug } = useParams();
    const propertyDetails = useContext(AppContext)
    // console.log(propertyDetails[0].properties[0].title)

  const selectedItem = propertyDetails[0].properties.find((item) => item.slug == slug);
//   console.log(selectedItem.id)
  const imageUrl = `${import.meta.env.BASE_URL}/${selectedItem.cover_image}`;

    return (
      <main
        className='w-full h-[80vh] flex bg-other'
      >
        <section className='w-full h-full flex flex-col  items-center justify-center'>
          <div className='flex flex-col mt-[10%]  md:flex-row md:max-w-6xl w-full h-[90%] md:my-auto md:rounded justify-between p-2 '>
           <div className='flex  h-full w-full md:w-[70%] bg-cover bg-center bg-no-repeat rounded'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>

           </div>
           <div className="flex md:flex-col h-full w-full md:w-[25%] rounded bg-white p-2 overflow-x-scroll no-scrollbar md:overflow-x-scroll">
            {selectedItem.other_images.map((image)=>{
                return(
                    <span className='w-[90%] md:mx-auto hover:cursor-pointer flex-shrink-0 m-2 md:my-2 bg-cover bg-center bg-no-repeat my-auto h-[95%] md:h-[25%] rounded'
                    style={{
                      backgroundImage: `url(${import.meta.env.BASE_URL}/${image})`,
                    }}></span>
                )
            })}

           
           </div>
  
            
          </div>

          
        </section>
      </main>
    );
  };
export default PropertyHero