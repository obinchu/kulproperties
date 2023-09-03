import React,{useState} from 'react'
import FormInput from '../../login/form/FormInput'
// import Select from "react-dropdown-select";
import LocationInput from '../../login/form/LocationInput';
import {MdOutlineMoreVert} from 'react-icons/md'
const Filter = () => {
    
    const [value, setValue] = useState('property');
    const [advanced ,setAdvanced] = useState(false)
    const [isActive, setIsActive] = useState(false);
    const [bathroom,setBathroom] = useState('bathroom')
    const [bedroom,setBedroom] = useState("bedroom")
    const [year,setYear] = useState("year")
   
    const handleInputChange = (event) => {
      setIsActive(event.target.value.length > 0);
    };

    const handleChange = (event) => {
      setValue(event.target.value);
      setArea(event.target.value);
      setIsActive(event.target.value.length > 0);
    };
    const handlebathroom = (event)=>{
      setBathroom(event.target.value);
      setIsActive(event.target.value.length > 0);


    }
    const handlebedroom = (event)=>{
        setBedroom(event.target.value);
        setIsActive(event.target.value.length > 0);
  
  
      }
      const handleyear = (event)=>{
        setYear(event.target.value);
        setIsActive(event.target.value.length > 0);
  
  
      }
      

 const amenities = [
    "Kitchen appliances",
    "Laundry facilities",
    "Garage or parking space",
    "Outdoor space ",
    "Security system",
    "Fireplace",
    "Walk-in closets",
    "Hardwood floors",
    "Energy-efficient features",
    "Swimming pool",
    "Home office space"]
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const number = [1,2,3,4,5,6,7,8,9,10]
    const years = [1999,2000,2001,2002,2005,2010,2019]
    const realEstatePropertyTypes = [
        "Single-Family Home",
        "Condominium (Condo)",
        "Townhouse",
        "Duplex",
        "Apartment Building",
        "Multi-Family Home",
        "Mobile Home",
        "Vacation Home",
        "Co-op (Cooperative)",
        "Commercial Property",
        "Industrial"]
  return (
    <section className='w-full md:mt-6'>
    <div className='flex mb-4 m-2 justify-center text-white'>
        <button className='p-3 m-2 px-8 rounded bg-white text-primary'>Buy</button>
        <button className='p-3 m-2 px-8 rounded bg-white text-primary'>Rent</button>
        <button className='p-3 m-2 px-8 rounded bg-white text-primary'>Sell</button>
    </div>
    <div className="block md:flex w-full max-h-[90%] md:h-[15vh] rounded bg-white">
        <form action="" className='block m-aut0 md:flex  w-full items-center justify-evenly'>
            <div className='block md:flex w-full md:w-[60%] py-2 md:p-0'>
            <FormInput placeholder={"search..."} type={"input"}/>
            <LocationInput placeholder={"Location"}/>    
            </div>
<label className='w-full py-2 md:w-[20%] items-center justify-center flex'>
  <select
    value={value}
    onChange={handleChange}
    className={`w-[75%] p-2 rounded m-2 md:w-full border ${
      isActive ? 'border-orange-400' : 'border-gray-300'
    } focus:outline-none focus:border-orange-400 bg-transparent`}
  >
    <option className='items-center justify-center' value="property">
      Property Type
    </option>
    {realEstatePropertyTypes.map(item => (
      <option value={item}>{item}</option>
    ))}
  </select>
</label>



            <div className='block w-full md:w-[20%] p-2 md:p-0  md:justify-evenly md:flex'>
            <span onClick={()=>setAdvanced(!advanced)} className='flex w-[80%] md:w-full hover:cursor-pointer justify-center border m-auto mb-2 items-center p-2 md:p-0 rounded md:m-2'>
                <span>Advanced</span>
                <span><MdOutlineMoreVert size={25}/></span>
            </span>
            <button className='w-[80%] flex p-2 bg-secondary px-4 m-auto text-white justify-center items-center rounded md:m-1'>Search</button>
            </div>
                

        </form>
    </div>
   
    {advanced && <div className=' w-full fixed  md:relative top-0 left-0 z-30   h-full md:h-[35vh] flex flex-col rounded bg-white mt-2 md:z-40 p-2 justify-between md:top-auto md:left-auto'>
        <div className='h-[80%] mt-[15%] md:mt-0 md:h-[60%] '>
            <div className='w-full justify-between flex'>
            <span className='text-lg text-primary font-medium md:m-2 md:my-4'>Amenities</span>
            <span onClick={()=>setAdvanced(false)} className='mx-2 hover:cursor-pointer'>close</span>
              </div>
              

            <div className="grid w-full h-[100%] grid-cols-2 md:grid-cols-4 grid-rows-6 md:grid-rows-3 gap-2 p-2">
                {amenities.map(item=>
                         <div className='flex text-primary/50 items-center p-2'>
                         <input className='w-5 h-5 mx-2' type='checkbox'/>
                         <label htmlFor="">{item}</label>
                         </div>
                    )}
           

            </div>
          

        </div>
        <div className='flex  items-center h-[20%] md:h-[30%] w-full'>
            <div className="flex w-full md:w-[80%]">
            <select value={bathroom} onChange={handlebathroom}  className={`p-2 rounded m-1 md:w-[25%]  md:mx-2 border ${
          isActive ? 'border-orange-400' : 'border-gray-300'
        } focus:outline-none focus:border-orange-400 bg-transparent `}
        >
            <option value="bathroom">Bathroom</option>
            {numbers.map(item=>
                <option value={item}>{item}</option>
                )}
            
            </select>
            <select value={bedroom} onChange={handlebedroom}  className={`p-2 rounded m-1  md:mx-2 md:w-[25%] border ${
          isActive ? 'border-orange-400' : 'border-gray-300'
        } focus:outline-none focus:border-orange-400 bg-transparent`}
        >
            <option value="bedroom">Bedrooms</option>
            {number.map(item=>
                <option value={item}>{item}</option>
                )}
            </select>
            <select value={year} onChange={handleyear}  className={`p-2 rounded m-1 md:w-[25%] md:mx-2 border ${
          isActive ? 'border-orange-400' : 'border-gray-300'
        } focus:outline-none focus:border-orange-400 bg-transparent`}
        >
             <option value="year">Year built</option>
            {years.map(item=>
                <option value={item}>{item}</option>
                )}
            </select>
            
            </div>
            
            </div>
    </div>}
    </section>

  )
}

export default Filter

