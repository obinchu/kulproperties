import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { BiPlus } from "react-icons/bi";

const Menu = ({ action }) => {
  const [open, setOpen] = useState(null);
  const handleCaret = (i) => {
    if (open == i) {
      return setOpen(null);
    }
    setOpen(i);
  };
  const closeCaret = () => {
    setOpen(null);
  };
  const headerElements = [
    { item: "Home", path: "" },
    { item: "Listing", more: ["All", "Resdential", "Commercial", "Rental"] },
    { item: "Property" },
    {
      item: "Pages",
      more: [
        "About Us",
        "Contact Us",
        "FAQs",
        "Login/Register",
        "Terms & Conditions",
      ],
    },
    {
      item: "Services",
      more: [
        "Building & Construction",
        "Archtectural Designs",
        "Structural Designs",
        "Renovations",
        "Landscaping",
        "Interior Designs",
        "Remodelling Extensions",
        "Construction Project",
        "Management",
        "Consultancy",
      ],
    },
    { item: "Blog" },
  ];

  return (
    <div className="w-[80%] pt-[15%]   h-full bg-primary backdrop-blur-sm text-white text-center block  fixed ">
      <div className="w-full block h-full p-2   ">
        <div className="flex flex-col h-[100%]  my-auto  border-b- w-full overflow-y-auto ">
          <div className="  text-base h-full m-auto  w-full  ">
            {headerElements.map((element, i,) => {
              return (
                <div className="flex flex-col h-[80%">
                  <li
                    key={i}
                    className="flex mx-1 p-2  items-center text-white justify-between"
                  >
                    <Link
                      onClick={() => {
                        if (!element.more) {
                          action();
                          closeCaret();
                        }
                        if (element.more) {
                          handleCaret(i);
                        }
                      }}
                      to={`/kulproperties/${element.path}`}
                      className="mx-2"
                    >
                      {element.item}
                    </Link>
                    {element.more && element.more.length > 0 && (
                      <span  onClick={() => handleCaret(i)}>
                        {open == i ? (
                          <span className="transition duration-300 flex ">
                            <RxCaretUp size={25} />
                          </span>
                        ) : (
                          <span className="transform -transition-transform duration-700  relative hover:cursor-pointer">
                            <RxCaretDown size={25} />
                          </span>
                        )}
                      </span>
                    )}
                  </li>
                  {element.more && element.more.length > 0 && open === i && (
  <ul className="flex flex-col mx-2 p-2">
    {element.more.map((item, index) => (
      <li
        key={index} // Assign a unique key to each <li>
        onClick={() => action(item)}
        className={`m-1 text-base text-start p-2 hover:font-medium`}
      >
        {item}
      </li>
    ))}
  </ul>
)}

                </div>
              );
            })}
            <div className="flex md:w-[40%] w-full h-[20%] items-center justify-center ">
              <button className="flex m-1 w-[80%]  hover:cursor-pointer text-white rounded-full justify-center p-2  ease-in-out items-center bg-secondary">
                <BiPlus size={25} />
                <span className="mx-1">Create Listing</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
