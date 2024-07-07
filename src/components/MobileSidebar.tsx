import { Heart, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileSidebar = () => {
  const location = useLocation();
  return (
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white x-10 p-2 sm:hidden z-30">
      <Link to={"/"}>
        <Home
          size={40}
          className={`cursor-pointer p-2 rounded-full hover:bg-[#fd9d27] transition-all duration-300] ${
            location.pathname === "/"
              ? "bg-[#1fa5c0] text-white font-extrabold"
              : ""
          }`}
        />
      </Link>
      <Link to={"/favorites"}>
        <Heart
          size={40}
          className={`cursor-pointer p-2 rounded-full hover:bg-[#fd9d27] transition-all duration-300] ${
            location.pathname === "/favorites"
              ? "bg-[#1fa5c0] text-white font-extrabold"
              : ""
          }`}
        />
      </Link>
    </div>
  );
};

export default MobileSidebar;
