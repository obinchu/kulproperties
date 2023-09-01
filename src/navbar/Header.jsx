import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiUser,BiPlus } from "react-icons/bi";
import {RxCaretDown,RxCaretUp} from 'react-icons/rx'
import { LiaPlayCircle, LiaDonateSolid } from "react-icons/lia";
import UserLogin from "../login/UserLogin";
import Menu from "../components/menu/Menu";
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
      console.log("clicked");
    }
  };
  function handleMenuClick(e) {
    if (humburgerRef.current && !humburgerRef.current.contains(e.target)) {
      handleHamburgerClick();
      console.log("clicked");
    }
  }

  const headerElements = [{item:"Home"},{item:"Listing"},{item:"Property"},{item:"Pages"},{item:"Blog"},]
  return (
    <div className="flex flex-col w-full items-center  ">
      <div className="flex fixed p-2 mx-auto w-full z-50 bg-white  backdrop-blur-sm md:p-3 text-black shadow-lg text-sm">
        <div className="w-full flex mx-auto max-w-7xl justify-between">
          <div className="flex items-center p-1">
           <span className="text-xl font-medium text-primary">KUL PROPERTIES</span>
          </div>
          <div className="hidden md:flex ms-auto me-3 m-1">
            <ul className="flex items-center">
              {
                headerElements.map((element)=>{
                  return(
                    <li class="relative mx-1 p-2 flex items-center text-primary group">
                    <span className="mx-2">{element.item}</span>
                    <span class="transition duration-300 flex group-hover:hidden">
                      <RxCaretDown size={25} />
                    </span>
                    <span class="transform -transition-transform duration-700 hidden group-hover:flex">
                      <RxCaretUp size={25} />
                      <div class="absolute  right-0 top-full  w-[200px]  bg-white border border-gray-300 rounded-lg  transform -transition-transform duration-700 ease-in-out group-hover:block">
                        <p>Content goes here...</p>
                        <p>Content goes here...</p>
                        <p>Content goes here...</p>
                      </div>
                      
                    </span>
                   
                  </li>
                  
                  
                  
                  )
                })
              }
            

              <li className="mx-1 flex items-center text-primary"><span>Contact us</span></li>
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
              <BiPlus size={25}/>
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
        <div className="fixed top-0 right-[-100%] h-full w-full bg-orange-400/50 text-white transform -transition-transform duration-1000 ease-in-out ">
          <div className="h-full flex items-center justify-center transform -transition-transform duration-1000 ease-in-out ">
            <Menu/>
          </div>
        </div>
      ) : (
        <div className="fixed top-0 right-0 z-40 h-full w-full bg-orange-400/50 text-white transform -transition-transform duration-1000 ease-in-out">
          <div className="h-full flex items-center justify-end">
            <Menu />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Header;
