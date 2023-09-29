import React, { useState, useEffect, useContext } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiBed } from "react-icons/bi";
import { MdOutlineBathtub } from "react-icons/md";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

const PropertyCards = () => {
  const [liked, setLiked] = useState({});

  const propertyData = useContext(AppContext);

  const desiredStatuses = ["rental", "commercial", "residential"];
  const lastThreeProperties = [];

  for (let i = propertyData[0].properties.length - 1; i >= 0; i--) {
    const property = propertyData[0].properties[i];
    if (
      desiredStatuses.includes(property.category) &&
      !lastThreeProperties.some((p) => p.category === property.category)
    ) {
      lastThreeProperties.push(property);
    }
    if (lastThreeProperties.length === 2) {
      break;
    }
  }

  lastThreeProperties.reverse();

  const handleLikeClick = (e, id) => {
    e.preventDefault();
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  return (
    <div className="w-full h-full md:h-[87%] flex flex-col rounded text-sm text-primary">
      <div className="flex flex-col relative w-full max-w-6xl m-auto h-full rounded">
        <div className="flex w-full h-full overflow-x-scroll no-scrollbar rounded p-1">
          {lastThreeProperties.map((details, index) =>
            details.category != "commercial" ? (
              <Link
                to={`/kulproperties/propertydetails/${details.slug}`}
                key={index}
                className="flex flex-shrink-0 w-[90%] md:w-[30%] rounded-md flex-col mx-2"
              >
                <div
                  key={index}
                  className="flex w-full h-[60%]  rounded-t-md bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${details.cover_image})`,
                  }}
                >
                  <div
                    className="flex flex-col p-2 w-full h-full justify-between"
                    style={{
                      background:
                        "linear-gradient(rgba(255, 255, 255, 0.1), rgba(0,0,0,0.3))",
                    }}
                  >
                    <div className="flex justify-between w-full">
                      <span className="rounded p-1 w-[23%] text-base justify-center bg-red-500 text-white flex">
                        {details.status}
                      </span>
                      <span className="rounded p-1 w-[23%] text-xs items-center justify-center bg-primary text-white flex">
                        {details.category}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white font-medium text-xl">
                        $ {details.price}
                      </span>
                      <span
                        onClick={(e) => handleLikeClick(e, details.id)}
                        className="flex w-[50%] items-center justify-end text-tertiary"
                      >
                        {!liked[details.id] ? (
                          <AiOutlineHeart size={29} />
                        ) : (
                          <FcLike size={29} />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col bg-white w-full rounded-b-md h-[40%] p-2 md:p-4">
                  <span className="items-center  flex justify-between text-base text-red-500">
                    {details.property_type}
                    <span className="text-sm">
                      {liked[details.id] ? details.likes + 1 : details.likes}
                      {details.likes == 1 ? (
                        <span>like</span>
                      ) : (
                        <span>likes</span>
                      )}
                    </span>
                  </span>
                  <span className="items-center  flex text-base font-medium">
                    {details.title}
                  </span>
                  <div className="flex items-center">
                    <span>
                      <CiLocationOn size={20} />
                    </span>
                    <span className="ms-1">{details.location}</span>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-2 gap-2 py-2">
                    <span className="flex items-center">
                      <BiBed size={25} />
                      {details.bedrooms} Bedrooms
                    </span>
                    <span className="flex items-center">
                      <MdOutlineBathtub size={25} />
                      {details.bathrooms} Bathrooms
                    </span>
                    <span className="flex items-center">
                      <TfiRulerAlt2 size={25} />
                      {details.area} Sq ft
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <Link
                to={`/kulproperties/propertydetails/${details.slug}`}
                key={index}
                className="flex flex-shrink-0 w-[90%] md:w-[30%] rounded-md flex-col mx-2"
              >
                <div
                  key={index}
                  className="flex w-full h-[60%]  rounded-t-md bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${details.cover_image})`,
                  }}
                >
                  <div
                    className="flex flex-col p-2 w-full h-full justify-between"
                    style={{
                      background:
                        "linear-gradient(rgba(255, 255, 255, 0.1), rgba(0,0,0,0.3))",
                    }}
                  >
                    <div className="flex justify-between w-full">
                      <span className="rounded p-1 w-[23%] text-base justify-center bg-red-500 text-white flex">
                        {details.status}
                      </span>
                      <span className="rounded p-1 w-[23%] text-xs items-center justify-center bg-primary text-white flex">
                        {details.category}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white font-medium text-xl">
                        $ {details.price}
                      </span>
                      <span
                        onClick={(e) => handleLikeClick(e, details.id)}
                        className="flex w-[50%] items-center justify-end text-tertiary"
                      >
                        {!liked[details.id] ? (
                          <AiOutlineHeart size={29} />
                        ) : (
                          <FcLike size={29} />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col bg-white w-full rounded-b-md h-[40%] p-2 md:p-4">
                  <span className="items-center  flex justify-between text-base text-red-500">
                    {details.property_type}
                    <span className="text-sm ms-auto">
                      {liked[details.id] ? details.likes + 1 : details.likes}
                      {details.likes == 1 ? (
                        <span>like</span>
                      ) : (
                        <span>likes</span>
                      )}
                    </span>
                  </span>
                  <span className="items-center  flex text-base font-medium">
                    {details.title}
                  </span>
                  <div className="flex items-center">
                    <span>
                      <CiLocationOn size={20} />
                    </span>
                    <span className="ms-1">{details.location}</span>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-2 gap-2 py-2">
                    <span className="flex items-center">
                      <TfiRulerAlt2 size={25} />
                      {details.area} Sq ft
                    </span>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCards;
