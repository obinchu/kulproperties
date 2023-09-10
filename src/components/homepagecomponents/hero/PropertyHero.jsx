import React, { useContext, useState } from "react";
import { AppContext } from "../../../App";
import { useParams } from "react-router-dom";
import {MdOutlineArrowForward} from 'react-icons/md'
import {BiArrowBack} from 'react-icons/bi'

const PropertyHero = () => {
  const propertyDetails = useContext(AppContext);
  const { slug } = useParams();
  const selectedItem = propertyDetails[0].properties.find(
    (item) => item.slug === slug
  );
  const images = selectedItem.images;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleBackImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <main className="w-full h-[50vh] md:h-[80vh] flex bg-other">
      <section className="w-full h-full flex flex-col items-center justify-center">
        <div className="relative flex mt-[15%] lg:max-w-7xl w-full h-[90%] lg:my-auto md:rounded justify-between px-2 md:px-0">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                className="flex md:h-full w-full h-[80%] md:mx-auto bg-cover bg-center bg-no-repeat rounded"
                style={{
                  backgroundImage: `url(${image})`,
                  display: index === currentImageIndex ? "block" : "none",
                }}
              ></div>
            );
          })}
        <div className="absolute flex w-full h-full justify-center rounded items-center">
  <div className="flex text-other justify-between w-full p-2 px-4">
    <span
      className={`hover:cursor-pointer me-auto bg-black/50 p-2 ${
        currentImageIndex === 0 ? "hidden" : ""
      }`}
      onClick={handleBackImage}
    >
      <BiArrowBack size={25} />
    </span>
    <span
      className={`hover:cursor-pointer text-other ms-auto bg-black/50 p-2 ${
        currentImageIndex === images.length - 1 ? "hidden" : ""
      }`}
      onClick={handleNextImage}
    >
      <MdOutlineArrowForward size={25} />
    </span>
  </div>
</div>
        </div>
      </section>
    </main>
  );
};

export default PropertyHero;
