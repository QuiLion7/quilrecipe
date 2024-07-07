import { Heart, HeartPulse, Soup } from "lucide-react";
import React from "react";
import { useFavorites } from "../hooks/useFavorites";

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

interface RecipeCardProps {
  recipe: Recipe;
  bg: string;
  badge: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, bg, badge }) => {
  const { favorites, addRecipe, removeRecipe } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.label === recipe.label);

  const handleAddToFavorite = () => {
    if (!isFavorite) {
      addRecipe(recipe);
    } else {
      removeRecipe(recipe.label);
    }
  };

  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.label} receita`}
        target=")blank"
        className="relative h-32"
      >
        <div className="skeleton absolute inset-0" />
        <img
          src={recipe.image}
          alt="imagem da receita"
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-300"
          onLoad={(e) => {
            e.currentTarget.style.opacity = "1";
            const previousSibling = e.currentTarget
              .previousElementSibling as HTMLElement | null;
            if (previousSibling) {
              previousSibling.style.display = "none";
            }
          }}
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> {recipe.yield} Porções
        </div>

        <div
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleAddToFavorite();
          }}
        >
          {!isFavorite && (
            <Heart
              size={20}
              className="hover:fill-red-500 hover:text-red-500"
            />
          )}
          {isFavorite && (
            <Heart size={20} className="fill-red-500 text-red-500" />
          )}
        </div>
      </a>

      <div className="flex mt-1">
        <p className="font-bold tracking-wide">{recipe.label}</p>
      </div>
      <p className="my-2">
        {recipe.cuisineType[0].charAt(0).toUpperCase() +
          recipe.cuisineType[0].slice(1)}
      </p>

      <div className="flex gap-2 w-full items-center">
        {recipe.dietLabels.map((label, idx) => (
          <div
            key={idx}
            className={`flex gap-1 ${badge} items-center p-2 rounded-md`}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
