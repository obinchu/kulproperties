import React, { useState,useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { BiPlus } from "react-icons/bi";
import styles from "./Menu.module.css"

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

  const propertyDetails = useContext(AppContext)
 
  const categories = new Set();

 
propertyDetails[0].properties.forEach((property) => {
  categories.add(property.category);
});

  const uniqueCategories =   [...categories]
  const headerElements = [
    { item: "Home", path: "" },
    {
      
        item: "Listing",
        more: uniqueCategories.map((category) => ({
          name: category,
          path: `category/${category}`,
        })),
      
      

    },
    { item: "Property",path: "listings" },
    {
      item: "Pages",
      more: [
        {path:"about",name:"About Us",},
     
        {path:"terms",name:"Terms & Conditions",},
      ],
    },
    {
      item: "Services",
      more: [
        { name: "Building & Construction" },
        { name: "Archtectural Designs" },
        { name: "Structural Designs" },
        { name: "Renovations" },
        { name: "Landscaping" },
        { name: "Interior Designs" },
        { name: "Remodelling Extensions" },
        { name: "Construction Project" },
        { name: "Management" },
        { name: "Consultancy" },
      ],
    },
    { item: "Blog" },
  ];

  return (
    <div className="w-[80%] md:w-[50%] pt-[15%] lg:hidden   h-full bg-primary backdrop-blur-sm text-white text-center block  fixed ">
      <div className="w-full block h-full p-2   ">
        <div className="flex flex-col h-[100%]  my-auto  border-b- w-full overflow-y-auto ">
          <div className="  text-base h-full m-auto  w-full  ">
            {headerElements.map((element, i) => {
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
                      <span onClick={() => handleCaret(i)}>
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
                    <ul className={`mx-2 p-1 flex-col flex  rounded ${styles.dropdown}`}>
                      
                      {element.more.map((item, index) => (
                        <Link
                        onClick={action}
                    to={`/kulproperties/${item.path}`}
                      
                          key={index}
                          className={`m-1 text-base text-start flex flex-col p-2 hover:font-medium 
                                   
                          `}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <div className="flex lg:w-[40%] w-full h-[20%] items-center justify-center ">
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
