import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
const App = () => {
  return (
    <div className=" w-full sm:max-w-[80%] mx-auto bg-white ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
  );
};

export default App;
