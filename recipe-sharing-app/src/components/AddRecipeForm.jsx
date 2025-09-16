import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };
    addRecipe(newRecipe);
    setTitle("");
    setDescription("");
    navigate(`/recipe/${newRecipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", width: "100%", padding: 8, marginBottom: 8 }}
        required
      />
      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: "block", width: "100%", padding: 8, marginBottom: 8 }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}