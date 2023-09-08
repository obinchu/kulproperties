import React, { useContext, useState } from "react";
import { AppContext } from "../../../App";
import { useParams } from "react-router-dom";

const PropertyHero = () => {
  const propertyDetails = useContext(AppContext);

  const { slug } = useParams();

  const selectedItem = propertyDetails[0].properties.find(
    (item) => item.slug == slug
  );

  const imageUrl = `${import.meta.env.BASE_URL}/${selectedItem.cover_image}`;

  const [background, setBackground] = useState(imageUrl);

  return (
    <main className="w-full h-[80vh]  flex bg-other">
      <section className="w-full h-full flex flex-col  items-center justify-center">
        <div className="flex flex-col mt-[10%]  lg:flex-row lg:max-w-6xl w-full h-[90%] lg:my-auto lg:rounded justify-between p-2 ">
          <div
            className="flex  h-full md:h-[60%] lg:h-full w-full md:w-[95%] md:mx-auto lg:w-[70%]  bg-cover bg-center bg-no-repeat rounded"
            style={{
              backgroundImage: `url(${background})`,
            }}
          ></div>
          <div className="flex lg:flex-col h-full md:h-[40%] lg:h-full w-full lg:w-[25%] rounded bg-white/50 backdrop-blur-lg p-2 my-2 overflow-x-scroll no-scrollbar lg:overflow-x-scroll">
            {selectedItem.other_images.map((image) => {
                const selectedItemBg = `${import.meta.env.BASE_URL}/${image}`;

              return (
                <span
                onClick={()=>setBackground(selectedItemBg)}
                  className="w-[80%] md:w-[35%] lg:w-[90%] lg:mx-auto hover:cursor-pointer flex-shrink-0 m-2 lg:my-2 bg-cover bg-center bg-no-repeat my-auto h-[80%] lg:h-[25%] rounded"
                  style={{
                    backgroundImage: `url(${selectedItemBg})`,
                  }}
                ></span>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
export default PropertyHero;
