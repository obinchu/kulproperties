import React, { useState, useEffect } from "react";
import PropertyHero from "../components/homepagecomponents/hero/PropertyHero";
import Details from "../propertydetails/Details";

const PropertyDetails = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

   
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="flex flex-col mt-[3.5%]">
      <PropertyHero />
      <Details />
    </div>
  );
};

export default PropertyDetails;
