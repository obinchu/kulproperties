import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./navbar/Header";
import Footer from "./components/footer/Footer";
import Listings from "./pages/Listings";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/kulproperties/*" element={<Home />} />
          <Route path="/kulproperties/listings" element={<Listings />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
