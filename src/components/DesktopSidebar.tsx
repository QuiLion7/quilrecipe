import { Heart, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DesktopSidebar = () => {
  const location = useLocation();

  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-56 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full flex justify-center items-center md:justify-start">
          <img src="/logo.png" alt="logo" className="w-14 md:w-28" />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-4">
          <Link
            to={"/"}
            className={`flex gap-1 p-2 rounded-md w-full ${
              location.pathname === "/"
                ? "bg-[#4ed4f6] text-white font-extrabold"
                : ""
            }`}
          >
            <Home size={"24"} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>
          <Link
            to={"/favorites"}
            className={`flex gap-1 p-2 rounded-md w-full ${
              location.pathname === "/favorites"
                ? "bg-[#4ed4f6] text-white font-extrabold"
                : ""
            }`}
          >
            <Heart size={"24"} />
            <span className="font-bold hidden md:block">Favorites</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DesktopSidebar;
