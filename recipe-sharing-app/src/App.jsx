import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Required imports
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import EditRecipeForm from "./components/EditRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <Router>
      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
        <h1>🍲 Recipe Sharing App</h1>

        {/* ✅ Search Bar appears on all pages */}
        <SearchBar />

        {/* ✅ Define all routes for the application */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}