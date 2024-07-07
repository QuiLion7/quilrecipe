import { RefreshCcw, Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
interface RecipeHit {
  recipe: Recipe;
}

const ApiId = import.meta.env.VITE_SOME_API_ID;
const ApiKey = import.meta.env.VITE_SOME_API_KEY;

function HomePage() {
  const [search, setSearch] = useState<string>("q");
  const navigate = useNavigate();

  const fetchRecipes = async (): Promise<RecipeHit[]> => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${ApiId}&app_key=${ApiKey}`
      );

      return response?.data.hits;
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
      throw error;
    }
  };

  const { isPending, error, data } = useQuery<RecipeHit[]>({
    queryKey: ["recipes", search],
    queryFn: fetchRecipes,
    refetchOnWindowFocus: false,
    enabled: !!search,
  });

  const handleSearchRecipe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    setSearch(input.value);
    input.value = "";
  };

  const handleRefresh = () => {
    navigate(0);
  };

  return (
    <div className="bg-slate-100 p-10 flex-1 ">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="input shadow-md w-full flex items-center gap-2">
            <Search size={24} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="O que você quer cozinhar hoje?"
            />
            <button onClick={handleRefresh}>
              <RefreshCcw size={22} />
            </button>
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-4xl mt-4">
          Receitas Recomendadas
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Escolhas Populares
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {error && (
            <div className="">
              Ocorreu um erro: " {+error}. Tente mais tarde!
            </div>
          )}

          {isPending &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
            ))}

          {!isPending &&
            data?.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
