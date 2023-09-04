import React, { useState } from "react";
import { FiGrid } from "react-icons/fi";
import { TiThListOutline } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { BiBed } from "react-icons/bi";
import { MdOutlineBathtub } from "react-icons/md";
import { TfiRulerAlt2 } from "react-icons/tfi";
import Pagination from "../features/Pagination";
import FilterInput from "../login/form/FilterInput";
import FilterLocation from "../login/form/FilterLocation";
import FormInput from "../login/form/FormInput";
import { MdOutlineMoreVert } from "react-icons/md";

const Listings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PropertyPerPage] = useState(4);
  const [value, setValue] = useState("property");
  const [advanced, setAdvanced] = useState(false);
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

  const HouseDetails = [
    {
      County: "Kajiado",
      Country: "Kenya",
      Type: "Condo",
      Location: "Kitengela",
      Beds: "3",
      Baths: "3",
      Size: 5600,
      Price: "1300000",
      Status: "For Sale",
      image: "./assets/images/house.jpg",
    },
    {
      County: "Kajiado",
      Country: "Kenya",
      Type: "Apartment",
      Location: "Kitengela",
      Beds: "3",
      Baths: "3",
      Size: 5600,
      Price: "1300000",
      Status: "For Sale",
      image: "./assets/images/house1.jpg",
    },
    {
      County: "Kajiado",
      Country: "Kenya",
      Type: "Flat",
      Location: "Kitengela",
      Beds: "3",
      Baths: "3",
      Size: 5600,
      Price: "1300000",
      Status: "For Sale",
      image: "./assets/images/house2.jpg",
    },
    {
      County: "Kajiado",
      Country: "Kenya",
      Type: "Condo",
      Location: "Kitengela",
      Beds: "3",
      Baths: "3",
      Size: 5600,
      Price: "1300000",
      Status: "For Sale",
      image: "./assets/images/house3.jpg",
    },
    {
      County: "Kajiado",
      Country: "Kenya",
      Type: "Condo",
      Location: "Kitengela",
      Beds: "3",
      Baths: "3",
      Size: 5600,
      Price: "1300000",
      Status: "For Sale",
      image: "./assets/images/house4.jpg",
    },
    {
      County: "Kajiado",
      Country: "Kenya",
      Type: "Condo",
      Location: "Kitengela",
      Beds: "3",
      Baths: "3",
      Size: 5600,
      Price: "1300000",
      Status: "For Sale",
      image: "./assets/images/house5.jpg",
    },
    {
      County: "Kajiado",
      Country: "Kenya",
      Type: "Condo",
      Location: "Kitengela",
      Beds: "3",
      Baths: "3",
      Size: 5600,
      Price: "1300000",
      Status: "For Sale",
      image: "./assets/images/house6.jpg",
    },
  ];
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
    "Home office space",
    "WiFi",
  ];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const years = [1999, 2000, 2001, 2002, 2005, 2010, 2019];
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
    "Industrial",
  ];

  const indexOfLastProperty = currentPage * PropertyPerPage;
  const indexOfFirstProperty = indexOfLastProperty - PropertyPerPage;
  const currentProperty = HouseDetails.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const setPage = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };
  return (
    <div className="w-full h-[290vh]  md:h-[140vh] flex bg-other text-sm">
      <div className="flex md:max-w-6xl w-full h-[100%] m-auto rounded p-2 justify-center items-center">
        <div className=" w-full flex flex-col  h-[95%] mt-auto m-auto  justify-between">
          <div className="flex w-full h-[3%] md:h-[10%] p-2">
            <div className="flex w-full  justify-between mt-auto">
              <span className="text-3xl justify-center font-medium">
                Property List
              </span>
              <div className="flex justify-center m-2">
                <span className="mx-1">
                  <FiGrid size={25} />
                </span>
                <span className="mx-1">
                  <TiThListOutline size={25} />
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full h-[97%] md:h-[90%] justify-between p-2">
            <div className="hidden md:flex flex-col w-full  md:w-[32%] h-full ">
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
                      className={`w-[75%] p-2 rounded my-2 md:w-[85%]   border ${
                        isActive ? "border-orange-400" : "border-gray-300"
                      } focus:outline-none focus:border-orange-400 bg-transparent`}
                    >
                      <option
                        className="items-center justify-center"
                        value="property"
                      >
                        Property Type
                      </option>
                      {realEstatePropertyTypes.map((item) => (
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
                  <div className="flex w-full  justify-center">
                    <select
                      value={bathroom}
                      onChange={handlebathroom}
                      className={`p-2 rounded m-1 md:w-[85%]  md:mx-2 border ${
                        isActive ? "border-orange-400" : "border-gray-300"
                      } focus:outline-none focus:border-orange-400 bg-transparent `}
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
                      className={`p-2 rounded m-1  md:mx-2 md:w-[85%] border ${
                        isActive ? "border-orange-400" : "border-gray-300"
                      } focus:outline-none focus:border-orange-400 bg-transparent`}
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
                      className={`p-2 rounded m-1 md:w-[85%] md:mx-2 border ${
                        isActive ? "border-orange-400" : "border-gray-300"
                      } focus:outline-none focus:border-orange-400 bg-transparent`}
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
                            {amenities.map((item) => (
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
            <div className="flex flex-col w-full md:w-[65%] h-full justify-between p-1 ">
              <div className="flex w-full  p-1 rouded h-[2.5%] md:h-[5%] my-1 justify-between bg-white rounded">
                <span className="items-center p-1 w-[40%] flex">
                  {HouseDetails.length} results
                </span>
                <div className="justify-center items-center flex w-[60%] ">
                  <span className="mx-2 w-[50%]">status</span>
                  <span className="mx-2 w-[50%]">sort order</span>
                </div>
              </div>
              <div className="flex w-full flex-col h-[97%] md:h-[95%]">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[90%] md:grid-rows-2 grid-rows-4 md:gap-1 gap-5 py-2 md:p-2">
                  {currentProperty.map((details, index) => (
                    <div
                      key={index}
                      className="flex flex-shrink w-[100%] md:w-[95%]  md:h-[90%]    rounded-md flex-col mx-auto md:mx-2"
                    >
                      <div
                        key={index}
                        className="flex w-full h-[60%]  rounded-t-md bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${import.meta.env.BASE_URL}${
                            details.image
                          })`,
                        }}
                      >
                        <div
                          className="flex flex-col p-2 w-full h-full justify-between"
                          style={{
                            background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0,0,0,0.3))`,
                          }}
                        >
                          <span className="rounded p-1 w-[23%] text-base justify-center bg-red-500 text-white flex">
                            {details.Status}
                          </span>
                          <span className=" text-white font-medium text-xl">
                            KES {details.Price}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col bg-white w-full rounded-b-md h-[40%] p-2 md:p-4">
                        <span className="items-center  flex text-base text-red-500">
                          {details.Type}
                        </span>
                        <span className="items-center  flex text-lg font-medium">
                          Renovated {details.Type}
                        </span>
                        <div className="flex items-center">
                          <span>
                            <CiLocationOn size={20} />
                          </span>
                          <span className="ms-1">{details.Location},</span>
                          <span className="ms-1">{details.County},</span>
                          <span className="ms-1">{details.Country}</span>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-2 py-2">
                          <span className="flex items-center">
                            <BiBed size={25} />
                            {details.Beds}Bedrooms
                          </span>
                          <span className="flex items-center">
                            <MdOutlineBathtub size={25} />
                            {details.Baths}Bathrooms
                          </span>
                          <span className="flex items-center">
                            <TfiRulerAlt2 size={25} />
                            {details.Size}Sq ft
                          </span>
                          <span className="flex items-center">
                            <BiBed size={25} />
                            {details.Beds}Bedrooms
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full flex mx-auto container p-1 m-1">
                  <Pagination
                    PropertyPerPage={PropertyPerPage}
                    totalProperties={HouseDetails.length}
                    currentPage={currentPage}
                    setPage={setPage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
