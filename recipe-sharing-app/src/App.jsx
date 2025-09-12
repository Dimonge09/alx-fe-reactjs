// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 12, fontFamily: "system-ui, sans-serif" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h1 style={{ margin: 0 }}><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Recipe Sharing App</Link></h1>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />

          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/recipe/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}