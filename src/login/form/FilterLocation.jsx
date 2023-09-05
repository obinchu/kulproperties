import React,{useState} from "react";
import { CiLocationOn } from "react-icons/ci";


const FilterLocation = ({ placeholder }) => {
        const [isActive, setIsActive] = useState(false);
      
        const handleClick = () => {
          setIsActive(!isActive);
        };
        const handleInputChange = (event) => {
            setIsActive(event.target.value.length > 0);
          };

  return (
    <div className="mx-auto w-[95%] md:w-[85%] my-2">
      <div className="relative flex w-[100%] mx-auto">
        <input
          className={`p-2 rounded m-1 w-full mx-auto border ${
            isActive ? "border-primary" : "border-gray-300"
          } focus:outline-none focus:border-primary`}
          type="text"
          id="password"
          onChange={handleInputChange}
        />
        <label
          className={`absolute left-2 top-3.5 text-base transition-all transform origin-top ${
            isActive
              ? "text-primary bg-white text-sm -translate-y-5 -translate-x-1/10 px-1 duration-300"
              : "text-gray-400"
          }`}
          htmlFor="password"
        >
          {placeholder}
        </label>
        <label
          className="absolute right-2  top-3.5 text-base transition-all transform origin-top cursor-pointer"
          htmlFor="icon"
        >
          <CiLocationOn size={25} />
        </label>
      </div>
    </div>
  );
};

export default FilterLocation;
