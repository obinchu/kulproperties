import React, { useState } from 'react';

const FormInput = ({placeholder, type}) => {
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (event) => {
    setIsActive(event.target.value.length > 0);
  };

  return (
    <div className=" mx-auto w-[95%] md:w-[85%] my-2">
        <div className="relative flex w-[80%] mx-auto">
            <input
        className={`p-2 rounded m-1 w-full mx-auto border ${
          isActive ? 'border-orange-400' : 'border-gray-300'
        } focus:outline-none focus:border-orange-400`}
        type={type}
        id="email"
        onChange={handleInputChange}
      />
      <label
        className={`absolute left-2 top-3.5 text-base transition-all transform origin-top ${
          isActive
            ? 'text-orange-400 bg-white text-sm -translate-y-5 -translate-x-1/10 px-1 duration-300'
            : 'text-gray-400'
        }`}
        htmlFor="email"
      >
        {placeholder}
      </label>
        </div>
      
    </div>
  );
};

export default FormInput;
