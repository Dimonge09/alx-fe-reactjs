import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

export default function RecommendationsList() {
  const recommendations = useRecipeStore((s) => s.recommendations);

  if (recommendations.length === 0) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Recommended for You</h2>
      {recommendations.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ddd", marginBottom: 8, padding: 8 }}>
          <h3><Link to={`/recipe/${r.id}`}>{r.title}</Link></h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
}