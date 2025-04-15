// src/context/RecipeContext.js
import React, { createContext, useContext, useState } from "react";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const saveRecipe = (recipe) => {
    setSavedRecipes((prev) => [...prev, recipe]);
  };

  return (
    <RecipeContext.Provider value={{ savedRecipes, saveRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);