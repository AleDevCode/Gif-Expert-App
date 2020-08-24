import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
// import PropTypes from "prop-types";

// Functional Components

const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Lilo & Stich"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr></hr>
      <AddCategory setCategories = {setCategories}/>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
        categories.map((category) => (
          <GifGrid 
          key = {category}
          category = {category} />
        ))
        
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
