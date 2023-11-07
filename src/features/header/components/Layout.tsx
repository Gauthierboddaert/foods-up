import { Link, redirect, useLocation } from "react-router-dom";
import AccountIcon from "../../Icon/AccountIcon";
import FoodsUpIcon from "../../Icon/FoodsUpIcon";
import HomeIcon from "../../Icon/HomeIcon";
import SearchIcon from "../../Icon/SearchIcon";
import LoginIcon from "../../Icon/LoginIcon";

const Layout = () => {
  const location = useLocation();
  const isLocatedTo = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <>
      {/* RESPONSIVE MAX 768PX */}
      <div className="h-16 flex items-center border-2 font-anton md:hidden z-10">
        <h1 className="ml-8 text-2xl">FOODS&nbsp;</h1>
        <h1 className="text-2xl text-foods-orange">UP</h1>
      </div>

      <div
        onClick={() => redirect("/profil")}
        className="bg-white w-full border-t-2 h-12 absolute bottom-0 flex items-center justify-around md:hidden z-10"
      >
        <HomeIcon
          color={`${isLocatedTo("/") ? "#f46d12" : "black"}`}
          className={`text-xl cursor-pointer`}
        />
        <AccountIcon
          color={`${isLocatedTo("/profil") ? "#f46d12" : "black"}`}
          className=" text-xl cursor-pointer"
        />
        <SearchIcon
          color={`${isLocatedTo("/search") ? "#f46d12" : "black"}`}
          className=" text-xl cursor-pointer"
        />
      </div>
      {/* RESPONSIVE MAX 768PX */}

      <div className="max-md:hidden flex">
        <div className="w-24 border-r-[1px] border-r-[#aeaeae] h-screen flex flex-col lg:w-52">
          <div className="h-1/3">
            <FoodsUpIcon className="w-full h-24 lg:w-52 lg:h-52" />
          </div>
          <div className="flex flex-col">
            <Link to="/">
              <div
                className={` hover:bg-grey-hover w-max px-2 p-2 ml-8 rounded-md flex cursor-pointer ${
                  isLocatedTo("/") ? "active" : ""
                }`}
              >
                <HomeIcon
                  color={`${isLocatedTo("/") ? "#f46d12" : "black"}`}
                  className={`text-xl cursor-pointer`}
                />

                <p
                  className={`max-lg:hidden ml-3 ${
                    isLocatedTo("/") ? "text-foods-orange font-bold" : "black"
                  }`}
                >
                  Accueil
                </p>
              </div>
            </Link>
            <Link to="/search">
              <div
                className={` hover:bg-grey-hover w-max px-2 p-2 ml-8 rounded-md flex cursor-pointer ${
                  isLocatedTo("/") ? "active" : ""
                }`}
              >
                <SearchIcon
                  color={`${isLocatedTo("/search") ? "#f46d12" : "black"}`}
                  className=" text-xl cursor-pointer"
                />

                <p
                  className={`max-lg:hidden ml-3 ${
                    isLocatedTo("/search")
                      ? "text-foods-orange font-bold"
                      : "black"
                  }`}
                >
                  Search
                </p>
              </div>
            </Link>
            <Link to="/login">
              <div
                className={` hover:bg-grey-hover w-max px-2 p-2 ml-8 rounded-md flex cursor-pointer ${
                  isLocatedTo("/") ? "active" : ""
                }`}
              >
                <LoginIcon
                  color={`${isLocatedTo("/login") ? "#f46d12" : "black"}`}
                  className=" text-xl cursor-pointer"
                />
                <p
                  className={`max-lg:hidden ml-3 ${
                    isLocatedTo("/login")
                      ? "text-foods-orange font-bold"
                      : "black"
                  }`}
                >
                  Se connecter
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
