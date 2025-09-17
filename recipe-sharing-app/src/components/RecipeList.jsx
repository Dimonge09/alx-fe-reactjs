import React from "react";
import { Link } from "react-router-dom"; // ✅ required import
import useRecipeStore from "./recipeStore";

export default function RecipeList() {
  const recipes = useRecipeStore((s) => s.recipes);
  const filteredRecipes = useRecipeStore((s) => s.filteredRecipes);
  const favorites = useRecipeStore((s) => s.favorites);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  // Choose filteredRecipes if search is active, otherwise all recipes
  const shownRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  if (shownRecipes.length === 0) {
    return <p>No recipes yet. Add one above!</p>;
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h2>All Recipes</h2>
      {shownRecipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {/* ✅ Use Link to navigate to recipe details */}
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>

            <p>{recipe.description}</p>

            <button
              onClick={() =>
                isFavorite
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
              style={{
                marginTop: "6px",
                background: isFavorite ? "gold" : "#eee",
                padding: "4px 8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {isFavorite ? "★ Unfavorite" : "☆ Favorite"}
            </button>
          </div>
        );
      })}
    </div>
  );
}