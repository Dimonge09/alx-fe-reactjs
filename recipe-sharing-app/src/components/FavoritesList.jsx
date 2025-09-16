import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

export default function FavoritesList() {
  const recipes = useRecipeStore((s) => s.recipes);
  const favorites = useRecipeStore((s) => s.favorites);

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div style={{ marginTop: 20 }}>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((r) => (
          <div
            key={r.id}
            style={{
              border: "1px solid #ddd",
              marginBottom: 8,
              padding: 8,
              borderRadius: "6px",
            }}
          >
            <h3>
              <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            </h3>
            <p>{r.description}</p>
          </div>
        ))
      )}
    </div>
  );
}