import React,{useState,useContext,useEffect} from 'react'
import FormInput from '../../login/form/FormInput'
import FilterInput from '../../login/form/FilterInput'
import FilterLocation from '../../login/form/FilterLocation'
import { AppContext } from '../../App'

const FilteredData = ({handleFilter,handlebathroom,handlebedroom,value,bathroom,bedroom}) => {

  const propertyDetails = useContext(AppContext);
    const [filteredData,setFIlteredData]=useState(propertyDetails)
    // const [value, setValue] = useState("Property Types ");
    const [isActive, setIsActive] = useState(false); 
    // const [bathroom, setBathroom] = useState("bathroom");
    // const [bedroom, setBedroom] = useState("bedroom");
    const [year, setYear] = useState("year");
    const [searchValue, setSearchValue] = useState('');
    
  
    // const handleInputChange = (event) => {
    //   setIsActive(event.target.value.length > 0);
    // };
  
    // const handleChange = (event) => {
    //   setValue(event.target.value);
    //   setIsActive(event.target.value.length > 0);
    // };
    // const handlebathroom = (event) => {
    //   setBathroom(event.target.value);
    //   setIsActive(event.target.value.length > 0);
    // };
    // const handlebedroom = (event) => {
    //   setBedroom(event.target.value);
    //   setIsActive(event.target.value.length > 0);
    // };
    const handleyear = (event) => {
      setYear(event.target.value);
      setIsActive(event.target.value.length > 0);
    };
  //   function handleFilter(event) {
  //     const searchValue = event.target.value.toLowerCase(); 
  //     setSearchValue(event.target.value); 
  //     setIsActive(searchValue.length > 0);
    
  //     const filteredProperties = propertyDetails[0].properties.filter((property) => {
  //       return (
  //         property.title.toLowerCase().includes(searchValue) ||
  //         property.description.toLowerCase().includes(searchValue) ||
  //         property.location.toLowerCase().includes(searchValue) ||
  //         property.category.toLowerCase().includes(searchValue) ||
  //         property.status.toLowerCase().includes(searchValue)
  //       );
  //     });
    
  //     console.log(filteredProperties);
  //      // Check if filteredProperties is empty
  // if (filteredProperties.length === 0) {
  //   setFIlteredData(propertyDetails);
  // } else {
  //   setFIlteredData(filteredProperties);
  // }
  //     console.log(filteredData,"filtered Data")
  //   }
   

 
    
  
    const years = [1999, 2000, 2001, 2002, 2005, 2010, 2019];
 
const propertyTypes = new Set();

const bedrooms = new Set();
const bathrooms = new Set();
const amenities = new Set();
const prices =new Set()

propertyDetails[0].properties.forEach((property) => {
  prices.add(property.price);
  if (property.unit && property.unit.price !== undefined) {
    prices.add(property.unit.price);
  }
});

propertyDetails[0].properties.forEach((property) => {
  property.amenities.forEach((amenity) => {
    amenities.add(amenity);
  });
});
propertyDetails[0].properties.forEach((property) => {
  if (property.property_type !== undefined) {
    propertyTypes.add(property.property_type);
  }
});

propertyDetails[0].properties.forEach((property) => {
  if (property.unit && property.unit.bedrooms !== undefined) {
    bedrooms.add(property.unit.bedrooms);
  }
});

propertyDetails[0].properties.forEach((property) => {
  if (property.unit && property.unit.bathrooms !== undefined) {
    bathrooms.add(property.unit.bathrooms);
  }
});

const uniquePropertyTypes = [...propertyTypes];
const uniqueBedrooms = [...bedrooms].sort((a, b) => a - b);
const uniqueBathrooms = [...bathrooms].sort((a, b) => a - b);
const uniqueAmenities =   [...amenities]
// const uniquePrices = [...prices].sort((a, b) => a - b);




useEffect(() => {
  console.log(searchValue);
}, [searchValue]); 

  return (
    <div className="hidden lg:flex flex-col w-full  md:w-[45%] lg:w-[32%] h-full ">
    <div className="flex w-full rounded p-2 h-full">
      <form
        action=""
        className="bg-white h-[90%] py-4 w-full rounded"
      >
        {/* <FilterInput onInputChange={handleFilter} placeholder={"search..."} type={"input"} /> */}
        {/* <div className="flex w-full  justify-center">
          <select
            value={value}
            onChange={handleChange}
            className={`p-2 rounded m-1 md:mx-2 w-[85%] border ${
               value == value ? "Property Types" : value
                ? "border-primary"
                : "border-gray-300"
            } focus:outline-none focus:border-primary bg-transparent`}
          >
            <option
              className="items-center justify-center"
              value="Property Types"
            >
            {value == value ? "Property Types" : value}
            </option>
            {uniquePropertyTypes.map((item,i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div> */}
      
        <div className="flex w-full  justify-center">
          <select
            value={bathroom}
            onChange={handlebathroom}
            className={`p-2 rounded m-1 md:mx-2 w-[85%] border ${
              !isNaN(bathroom)  && bathroom.length > 0
                ? "border-primary"
                : "border-gray-300"
            } focus:outline-none focus:border-primary bg-transparent`}
          >
            <option value="bathroom">{bathroom == bathroom ? "Bathroom" : bathroom}</option>
            {uniqueBathrooms.map((item,i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
         
          </select>
        </div>
        <div className="flex w-full  justify-center">
        <select
  value={bedroom}
  onChange={handlebedroom}
  className={`p-2 rounded m-1 md:mx-2 w-[85%] border ${
    !isNaN(bedroom)  && bedroom.length > 0
      ? "border-primary"
      : "border-gray-300"
  } focus:outline-none focus:border-primary bg-transparent`}
>
  <option value="bedroom">{bedroom == bedroom ? "Bedrooms" : bedroom}</option>
  {uniqueBedrooms.map((item, i) => (
    <option key={i} value={item}>
      {item}
    </option>
  ))}
</select>


        </div>
        <div className="flex w-full  justify-center">
          <select
            value={year}
            onChange={handleyear}
            className={`p-2 rounded m-1 md:mx-2 w-[85%] border ${
              !isNaN(year)  && year.length > 0
                ? "border-primary"
                : "border-gray-300"
            } focus:outline-none focus:border-primary bg-transparent`}
          >
            <option value="year">Year built</option>
            {years.map((item,i) => (
              <option key={i} value={item}>
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
                  {uniqueAmenities.map((item,i) => (
                    <div
                      key={i}
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

export default FilteredData

