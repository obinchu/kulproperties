import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiUser, BiPlus } from "react-icons/bi";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { LiaPlayCircle, LiaDonateSolid } from "react-icons/lia";
import UserLogin from "../login/UserLogin";
import Menu from "../components/menu/Menu";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = ({ timeline, ease }) => {
  const [hamburger, setHamburger] = useState(true);
  const [userAccess, setUserAccess] = useState(false);
  const [menu, setMenu] = useState(false);
  const [give, setGive] = useState(true);

  function handleHamburgerClick() {
    setMenu(!menu);
  }

  function handleUserclick() {
    setUserAccess(!userAccess);
  }

  function openMenu() {
    setHamburger(!hamburger);
    setGive(true);
  }
  function closeMenu() {
    setHamburger(true);
  }
  function handleGive() {
    setHamburger(true);
    setGive(!give);
  }

  const userAccessRef = useRef();
  const humburgerRef = useRef();

  useEffect(() => {
    document.body.style.overflowY = hamburger ? "auto" : "hidden";
    document.addEventListener("click", handleMenuClick, true);

    return () => {
      document.removeEventListener("click", handleMenuClick, true);
    };
  }, [hamburger]);
  useEffect(() => {
    document.body.style.overflowY = give ? "auto" : "hidden";
  }, [give]);

  useEffect(() => {
    document.body.style.overflowY = !userAccess ? "auto" : "hidden";
    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, [userAccess]);

  const handleDocumentClick = (e) => {
    if (userAccessRef.current && !userAccessRef.current.contains(e.target)) {
      handleUserclick();
    }
  };
  function handleMenuClick(e) {
    if (humburgerRef.current && !humburgerRef.current.contains(e.target)) {
      handleHamburgerClick();
    }
  }

  const headerElements = [
    { item: "Home", path: "" },
    {
      item: "Listing",
      more: ["All", "Resdential", "Commercial", "Rental"],
    },
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
    <div className="flex flex-col w-full items-center  ">
      <div className="flex fixed p-2 mx-auto w-full z-50 bg-white  backdrop-blur-sm md:p-3 text-black shadow-lg text-sm">
        <div className="w-full flex mx-auto max-w-7xl justify-between">
          <div className="flex items-center p-1">
            <span className="text-xl font-medium text-primary">
              KUL PROPERTIES
            </span>
          </div>
          <div className="hidden md:flex ms-auto me-3 m-1">
            <ul className="flex items-center">
              {headerElements.map((element, i) => {
                return (
                  <li
                    key={i}
                    className="relative mx-1 p-2 flex items-center text-primary group hover:cursor-pointer"
                  >
                    <Link
                      to={`/kulproperties/${element.path}`}
                      className="mx-2"
                    >
                      {element.item}
                    </Link>

                    {element.more && element.more.length > 0 && (
                      <span>
                        <span className="transition duration-300 flex group-hover:hidden">
                          <RxCaretDown size={25} />
                        </span>
                        <span className="transform -transition-transform duration-700 hidden group-hover:flex relative hover:cursor-pointer">
                          <RxCaretUp size={25} />

                          <ul className="bg-transparent absolute top-full w-[200px] h-[300px] right-1  ">
                            <ul
                              className={`bg-white mt-8 rounded ${styles.dropdown}`}
                            >
                              {element.more.map((item, index) => (
                                <li
                                  key={index}
                                  className={`m-1 text-base p-2 hover:font-medium ${
                                    index !== element.more.length - 1
                                      ? "border-b"
                                      : ""
                                  }`}
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </ul>
                        </span>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex">
            <div
              onClick={handleUserclick}
              className="flex m-1  hover:cursor-pointer text-primary hover:text-primary ease-in-out items-center "
            >
              <BiUser size={25} />
              <span className="hidden md:flex my-auto mx-1">Account</span>
            </div>
            <button className="hidden md:flex m-1  hover:cursor-pointer text-white rounded p-1 hover:bg-primary ease-in-out items-center bg-secondary">
              <BiPlus size={25} />
              <span className="mx-1">Create Listing</span>
            </button>
            <section
              onClick={openMenu}
              ref={humburgerRef}
              className="flex md:hidden m-1  hover:cursor-pointer hover:text-orange-400 duration-700 ease-in-out"
            >
              {hamburger ? (
                <AiOutlineMenu
                  className="md:flex my-auto m-1 duration-700 "
                  size={25}
                />
              ) : (
                <AiOutlineClose
                  className="md:flex my-auto m-1 duration-700"
                  size={25}
                />
              )}
            </section>
          </div>
        </div>
      </div>
      {userAccess && (
        <div className="w-full h-screen z-50 md:h-[100vh] bg-black/70 backdrop-blur-lg justify-center fixed ">
          <UserLogin ref={userAccessRef} />
        </div>
      )}
      {hamburger ? (
        <div className="fixed top-0 right-[-100%] z-40 h-full w-full bg-other/30 text-white transform -transition-transform duration-1000 ease-in-out ">
          <div className="h-full flex items-center justify-center transform -transition-transform duration-1000 ease-in-out ">
            <Menu action={closeMenu} />
          </div>
        </div>
      ) : (
        <div className="fixed top-0 right-0 z-40 h-full w-full bg-other/30 text-white transform -transition-transform duration-1000 ease-in-out">
          <div className="h-full flex items-center justify-end">
            <Menu action={closeMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
