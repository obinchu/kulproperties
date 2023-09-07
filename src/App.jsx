import React,{useState,useEffect} from "react";
import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./navbar/Header";
import Footer from "./components/footer/Footer";
import Listings from "./pages/Listings";
import PropertyDetails from "./pages/PropertyDetails";
import Data from '../src/data/Data.json'
import { createContext } from "react";
import RentalListing from "./pages/RentalListing";
import About from "./pages/About";
import Error from "./pages/Error";

export const AppContext = createContext()



function App() {
  return (
    <div>
      <AppContext.Provider value={Data}>
   
  <Header />
  <Routes>
    <Route path="/kulproperties/" element={<Home />} />
    <Route path="/kulproperties/propertydetails/:slug" element={<PropertyDetails />} />
    <Route path="/kulproperties/listings" element={<Listings />} />
    <Route path="/kulproperties/about" element={<About />} />
    <Route path="/kulproperties/:category" element={<RentalListing />} />
    <Route path="*" element={<Error />} />
  </Routes>
  <Footer />


      </AppContext.Provider>
      
    </div>
  );
}

export default App;
