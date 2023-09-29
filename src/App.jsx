import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./navbar/Header";
import Footer from "./components/footer/Footer";
import Listings from "./pages/Listings";
import PropertyDetails from "./pages/PropertyDetails";
import { createContext } from "react";
import RentalListing from "./pages/RentalListing";
import About from "./pages/About";
import Error from "./pages/Error";
import TermsAndConditions from "./pages/TermsAndConditions";
import FilteredSearch from "./pages/FilteredSearch";
import Axios  from "axios";
import CreateListing from "./pages/CreateListing";

export const AppContext = createContext();

function App() {
  const [data, setData] = useState(localStorage.getItem("cachedData") || null);

  useEffect(() => {
    const cachedData = localStorage.getItem('cachedData');

    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      Axios.get('https://kulproperties-73b1dd21a039.herokuapp.com/api/properties')
        .then((response) => {
          const fetchedData = response.data;

          localStorage.setItem('cachedData', JSON.stringify(fetchedData));

          setData(fetchedData);
          console.log(fetchedData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, []);

  if (data === null) {
    return (
      <main className='w-full h-[100vh] md:h-[100vh] flex bg-cover bg-center bg-no-repeat'>
        <section className='w-full h-full flex flex-col  items-center justify-center'>
          <div className='flex flex-col md:mx-auto md:max-w-7xl w-full h-[100%] md:my-auto md:rounded items-center justify-center p-2 '>
            <div id="preloader">
              <div id="loader"></div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!data[0] || !data[0].properties) {
    return (
      <main className='w-full h-[100vh] md:h-[100vh] flex bg-cover bg-center bg-no-repeat'>
        <section className='w-full h-full flex flex-col  items-center justify-center'>
          <div className='flex flex-col md:mx-auto md:max-w-7xl w-full h-[100%] md:my-auto md:rounded items-center justify-center p-2 '>
            <div id="preloader">
              <div id="loader"></div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const properties = data;

  return (
    <div className="text-primary">
      <AppContext.Provider value={properties}>
        <Header />
        <Routes>
          <Route path="/kulproperties/" element={<Home />} />
          <Route
            path="/kulproperties/propertydetails/:slug"
            element={<PropertyDetails />}
          />
          {/* <Route path="/kulproperties/listings" element={<Listings />} /> */}
          <Route path="/kulproperties/about" element={<About />} />
          <Route
            path="/kulproperties/terms"
            element={<TermsAndConditions />}
          />
           <Route
            path="/kulproperties/createlisting"
            element={<CreateListing/>}
          />
          <Route
            path="/kulproperties/listings"
            element={<RentalListing />}
          />
          <Route
            path="/kulproperties/filteredsearch/:property_type"
            element={<FilteredSearch/>}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
 