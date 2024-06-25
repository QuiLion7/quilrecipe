import RecipeCard from "../components/RecipeCard";

function FavoritesPage() {
  const fav = false;
  return (
    <div className="bg-slate-100 flex-1 p-10 min-h-screen">
      <div className="mx-auto max-w-screen-lg">
        <p className="font-bold text-3xl md:text-4xl my-4">Minhas Favoritas</p>

        {!fav && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" className="h-3/4" alt="404 svg" />
          </div>
        )}

        {fav && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecipeCard />
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritesPage;
