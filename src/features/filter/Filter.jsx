import React,{useState,useContext} from 'react'
import FormInput from '../../login/form/FormInput'
// import Select from "react-dropdown-select";
import LocationInput from '../../login/form/LocationInput';
import {MdOutlineMoreVert} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
const Filter = () => {
    
    const [value, setValue] = useState('property');
    const [advanced ,setAdvanced] = useState(false)
    const [isActive, setIsActive] = useState(false);
  
    const [buy,setBuy] = useState(true)

   
    const handleInputChange = (event) => {
      setIsActive(event.target.value.length > 0);
    };

    const handleChange = (event) => {
      setValue(event.target.value);
      setArea(event.target.value);
      setIsActive(event.target.value.length > 0);
    };

      const propertyDetails = useContext(AppContext)
 
      const propertyTypes = new Set();
    
     
    propertyDetails[0].properties.forEach((property) => {
      propertyTypes.add(property.property_type);
    });
    
      const uniquePropertyTypes =   [...propertyTypes]
    


  return (
    <section className='w-full md:mt-6'>
    <div className='flex mb-4 m-2 justify-center text-white'>
    <div>
  <button
    onClick={() => setBuy(true)}
    className={`p-3 m-2 px-8 rounded ${buy ? 'bg-primary text-white' : 'bg-white text-primary'}`}
  >
    Buy
  </button>
  <button
    onClick={() => setBuy(false)}
    className={`p-3 m-2 px-8 rounded ${!buy ? 'bg-primary text-white' : 'bg-white text-primary'}`}
    >
    Rent
  </button>
</div>

    </div>
    {buy ? <div className="block md:flex w-[90%] mx-auto md:w-full h-[85%] md:h-[15vh] rounded bg-white">
        <form action="" className='block m-auto md:flex  w-full items-center justify-evenly'>
            <div className='block md:flex w-full md:w-[60%] py-2 md:p-0'>
            <FormInput placeholder={"search..."} type={"input"}/>
            <FormInput placeholder={"Max Price"} type={"number"}/>
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
    {uniquePropertyTypes.map(item => (
      <option key={item} value={item}>{item}</option>
    ))}
  </select>
</label>



            <div className='block w-full md:w-[20%] p-2 md:p-0  md:justify-evenly md:flex'>
           
            <Link to="/kulproperties/status/buy" className='w-[80%] flex p-2 bg-secondary px-4 m-auto text-white justify-center items-center rounded md:m-1'>Search</Link>
            </div>
                

        </form>
    </div>
  :
  <div className="block md:flex w-[90%] mx-auto md:w-full h-[85%] md:h-[15vh] rounded bg-white">
  <form action="" className='block m-auto md:flex  w-full items-center justify-evenly'>
      <div className='block md:flex w-full md:w-[60%] py-2 md:p-0'>
      <FormInput placeholder={"search..."} type={"input"}/>
      <FormInput placeholder={"Max Price"} type={"number"}/>
      <LocationInput placeholder={"Location"}/>    
      </div>
<label className='w-full py-2 md:w-[20%] items-center justify-center flex'>
<select
value={value}
onChange={handleChange}
className={`w-[75%] p-2 rounded m-2 md:w-full border ${
isActive ? 'border-primary' : 'border-gray-300'
} focus:outline-none focus:border-primary bg-transparent`}
>
<option className='items-center justify-center' value="property">
Property Type
</option>
{uniquePropertyTypes.map(item => (
<option key={item} value={item}>{item}</option>
))}
</select>
</label>



      <div className='block w-full md:w-[20%] p-2 md:p-0   md:flex'>
      <Link to="/kulproperties/status/rent" className='w-[80%] flex p-2 bg-secondary px-4 m-auto text-white justify-center items-center rounded md:m-1'>Search</Link>
      </div>
          

  </form>
</div>  
  }
   
    </section>

  )
}

export default Filter

