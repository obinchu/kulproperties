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
import TermsAndConditions from "./pages/TermsAndConditions";
import FilteredSearch from "./pages/FilteredSearch";


export const AppContext = createContext()



function App() {
  // useEffect(()=>{
  //   fetch("https://kulproperties-73b1dd21a039.herokuapp.com/api/properties").then((res)=>res.json()).
  //   then((data)=>{
  //     console.log(data)
  //   })
  // },[])
  return (
    <div className="text-primary">
      <AppContext.Provider value={Data}>
   
  <Header />
  <Routes>
    <Route path="/kulproperties/" element={<Home />} />
    <Route path="/kulproperties/propertydetails/:slug" element={<PropertyDetails />} />
    <Route path="/kulproperties/listings" element={<Listings />} />
    <Route path="/kulproperties/about" element={<About />} />
    <Route path="/kulproperties/terms" element={<TermsAndConditions />} />
    <Route path="/kulproperties/category/:category" element={<RentalListing />} />
  <Route path="/kulproperties/status/:status" element={<FilteredSearch />} />
    <Route path="*" element={<Error />} />
  </Routes>
  <Footer />


      </AppContext.Provider>
      
    </div>
  );
}

export default App;
