import { Heart, HeartPulse, Soup } from "lucide-react";
import React from "react";

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
}

const getTwoValuesFromArray = (arr: string[]) => {
  return [arr[0], arr[1]];
};

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);

  return (
    <div className="flex flex-col rounded-md bg-amber-100 overflow-hidden p-3 relative">
      <a href="#" className="relative h-32">
        <img
          src={recipe.image}
          alt="imagem de uma receita"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          {" "}
          <Soup size={16} /> {recipe.yield} Porções
        </div>

        <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer ">
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
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
        {healthLabels.map((label, idx) => (
          <div
            key={idx}
            className="flex gap-1 bg-lime-200 items-center p-1 rounded-md"
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
