import RecipeCard from "../components/RecipeCard";
import { useFavorites } from "../hooks/useFavorites";
import { getRandomColor } from "../lib/utils";

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

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="bg-slate-100 flex-1 p-10 min-h-screen">
      <div className="mx-auto max-w-screen-lg">
        <p className="font-bold text-3xl md:text-4xl my-4">Minhas Favoritas</p>

        {favorites.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" className="h-3/4" alt="404 svg" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((recipe: Recipe) => (
            <RecipeCard
              key={recipe.label}
              recipe={recipe}
              {...getRandomColor()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
