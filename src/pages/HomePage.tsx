import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";

function HomePage() {
  return (
    <div className="bg-slate-100 p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={24} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="O que você quer cozinhar hoje?"
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-4xl mt-4">
          Receitas Recomendadas
        </h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Escolhas Populares
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <RecipeCard />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
