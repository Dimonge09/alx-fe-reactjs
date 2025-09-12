// src/components/RecipeList.jsx
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div style={{ padding: 20 }}>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        recipes.map((r) => (
          <div key={r.id} style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}>
            <h3 style={{ margin: "0 0 6px 0" }}>
              <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            </h3>
            <p style={{ margin: "0 0 8px 0" }}>{r.description.length > 150 ? r.description.slice(0, 150) + "…" : r.description}</p>
            <div style={{ display: "flex", gap: 8 }}>
              <Link to={`/recipe/${r.id}/edit`}>Edit</Link>
              <DeleteRecipeButton id={r.id} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}