import { useState, useEffect } from "react";

interface Recipe {
  label: string;
  image: string;
  source: string;
  url: string;
  ingredients: Array<{ text: string }>;
  calories: number;
  cuisineType: string[];
  dietLabels: string[];
  dishType: string[];
  healthLabels: string[];
  mealType: string[];
  totalTime: number;
  yield: number;
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<Recipe[]>(() => {
    const json = localStorage.getItem("favorites");
    return json ? JSON.parse(json) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addRecipe = (recipe: Recipe) => {
    setFavorites((prevFavorites: Recipe[]) => [...prevFavorites, recipe]);
  };

  const removeRecipe = (recipeLabel: string) => {
    setFavorites((prevFavorites: Recipe[]) =>
      prevFavorites.filter((fav) => fav.label !== recipeLabel)
    );
  };

  return { favorites, addRecipe, removeRecipe };
}
