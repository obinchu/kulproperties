import React,{useState,useContext} from 'react'
import FormInput from '../../login/form/FormInput'
import FilterInput from '../../login/form/FilterInput'
import FilterLocation from '../../login/form/FilterLocation'
import { AppContext } from '../../App'

const ListingFilter = () => {


    const [value, setValue] = useState("property");
    const [isActive, setIsActive] = useState(false);
    const [bathroom, setBathroom] = useState("bathroom");
    const [bedroom, setBedroom] = useState("bedroom");
    const [year, setYear] = useState("year");
  
    const handleInputChange = (event) => {
      setIsActive(event.target.value.length > 0);
    };
  
    const handleChange = (event) => {
      setValue(event.target.value);
      setArea(event.target.value);
      setIsActive(event.target.value.length > 0);
    };
    const handlebathroom = (event) => {
      setBathroom(event.target.value);
      setIsActive(event.target.value.length > 0);
    };
    const handlebedroom = (event) => {
      setBedroom(event.target.value);
      setIsActive(event.target.value.length > 0);
    };
    const handleyear = (event) => {
      setYear(event.target.value);
      setIsActive(event.target.value.length > 0);
    };
  
    const propertyDetails = useContext(AppContext)
   
    const amenities = new Set();

    propertyDetails[0].properties.forEach((property) => {
      property.amenities.forEach((amenity) => {
        amenities.add(amenity);
      });
    });
    
  const uniqueAmenities =   [...amenities]
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const years = [1999, 2000, 2001, 2002, 2005, 2010, 2019];
 
    const propertyTypes = new Set();
  
   
  propertyDetails[0].properties.forEach((property) => {
    propertyTypes.add(property.property_type);
  });
  
    const uniquePropertyTypes =   [...propertyTypes]
  return (
    <div className="hidden lg:flex flex-col w-full  md:w-[45%] lg:w-[32%] h-full ">
    <div className="flex w-full rounded p-2 h-full">
      <form
        action=""
        className="bg-white h-[90%] py-4 w-full rounded"
      >
        <FilterInput placeholder={"search..."} type={"input"} />
        <FilterLocation placeholder={"Location"} />
        <div className="flex w-full  justify-center">
          <select
            value={value}
            onChange={handleChange}
            className={`w-[85%] p-2 rounded my-2   border ${
              isActive ? "border-primary" : "border-gray-300"
            } focus:outline-none focus:border-primary bg-transparent`}
          >
            <option
              className="items-center justify-center"
              value="property"
            >
              Property Type
            </option>
            {uniquePropertyTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      
        <div className="flex w-full  justify-center">
          <select
            value={bathroom}
            onChange={handlebathroom}
            className={`p-2 rounded m-1 w-[85%]  md:mx-2 border ${
              isActive ? "border-primary" : "border-gray-300"
            } focus:outline-none focus:border-primary bg-transparent `}
          >
            <option value="bathroom">Bathroom</option>
            {numbers.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
         
          </select>
        </div>
        <div className="flex w-full  justify-center">
          <select
            value={bedroom}
            onChange={handlebedroom}
            className={`p-2 rounded m-1  md:mx-2 w-[85%] border ${
              isActive ? "border-primary" : "border-gray-300"
            } focus:outline-none focus:border-primary bg-transparent`}
          >
            <option value="bedroom">Bedrooms</option>
            {number.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-full  justify-center">
          <select
            value={year}
            onChange={handleyear}
            className={`p-2 rounded m-1 w-[85%] md:mx-2 border ${
              isActive ? "border-primary" : "border-gray-300"
            } focus:outline-none focus:border-primary bg-transparent`}
          >
            <option value="year">Year built</option>
            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-full p-2  justify-center">
          <FormInput placeholder={"Min Price"} type={"number"} />
          <FormInput placeholder={"Max Price"} type={"number"} />
        </div>
        <div className="flex w-full p-2  justify-center">
          <FormInput placeholder={"Min Area"} type={"number"} />
          <FormInput placeholder={"Max Area"} type={"number"} />
        </div>
        <div className="flex w-full justify-center">
          <div className="flex-col w-full md:w-[80%] p-2 md:p-0  justify-center items-center  flex">
            <div className=" w-full flex flex-col rounded bg-white  p-2 ">
              <div className="h-[90%] w-full  ">
                <div className="w-full flex">
                  <span className="text-lg text-primary font-medium md:m-2 md:my-4">
                    Amenities
                  </span>
                </div>

                <div className="grid w-full h-[100%] grid-cols-2  grid-rows-6  gap-2 p-1">
                  {uniqueAmenities.map((item) => (
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
              </div>
            </div>
            <button className="w-[80%] flex p-2 bg-secondary px-4 m-auto text-white justify-center items-center rounded md:m-1">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ListingFilter