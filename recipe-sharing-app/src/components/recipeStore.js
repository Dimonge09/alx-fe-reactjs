import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Spaghetti Bolognese", description: "A classic Italian pasta dish." },
    { id: 2, title: "Chicken Curry", description: "Spicy and creamy chicken curry." },
    { id: 3, title: "Vegetable Stir Fry", description: "Quick and healthy stir fry." },
  ],
  searchTerm: "",
  filteredRecipes: [],
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
}));

export default useRecipeStore;