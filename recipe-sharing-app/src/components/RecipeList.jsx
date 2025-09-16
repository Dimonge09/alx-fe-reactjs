import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const { recipes, filteredRecipes } = useRecipeStore((state) => state);
  const listToShow = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {listToShow.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;