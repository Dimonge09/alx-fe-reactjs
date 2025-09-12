// src/components/DeleteRecipeButton.jsx
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handle = () => {
    if (window.confirm("Delete this recipe?")) {
      deleteRecipe(id);
      navigate("/"); // go back to list after delete
    }
  };

  return (
    <button onClick={handle} style={{ color: "white", background: "#c0392b", border: "none", padding: "6px 10px", borderRadius: 4 }}>
      Delete
    </button>
  );
}