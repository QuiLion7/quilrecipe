import { Heart, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DesktopSidebar = () => {
  const location = useLocation();

  return (
    <div className="p-3 md:p-6 border-r min-h-screen w-24 md:w-48 hidden sm:block z-20">
      <div className="flex flex-col gap-10 sticky top-10 left-0">
        <div className="w-full flex justify-center items-center">
          <img src="/logo.png" alt="logo" className="w-14 md:w-32" />
        </div>
        <ul className="flex flex-col items-center md:items-start gap-4">
          <Link
            to={"/"}
            className={`flex justify-center md:justify-start gap-2 p-2 rounded-md w-full hover:bg-[#fd9d27] transition-all duration-300] ${
              location.pathname === "/"
                ? "bg-[#1fa5c0] text-white font-extrabold"
                : ""
            }`}
          >
            <Home size={"24"} />
            <span className="font-bold hidden md:block">Home</span>
          </Link>
          <Link
            to={"/favorites"}
            className={`flex justify-center md:justify-start gap-2 p-2 rounded-md w-full hover:bg-[#fd9d27] transition-all duration-300]  ${
              location.pathname === "/favorites"
                ? "bg-[#1fa5c0] text-white font-extrabold"
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
