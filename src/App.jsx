import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PlantDetails from "./components/PlantDetails";
import Footer from "./components/Footer";
import Learning from "./components/Learning";
import Compare from "./components/Compare";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/plant/:name" element={<PlantDetails />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App;
