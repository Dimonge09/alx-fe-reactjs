// src/components/RecipeDetails.jsx
import { Link, useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => String(r.id) === String(id)));

  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <p>Recipe not found.</p>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 16 }}>
        <Link to={`/recipe/${id}/edit`} style={{ marginRight: 10 }}>
          Edit
        </Link>
        <DeleteRecipeButton id={recipe.id} />
      </div>

      <div style={{ marginTop: 20 }}>
        <Link to="/">← Back to list</Link>
      </div>
    </div>
  );
}