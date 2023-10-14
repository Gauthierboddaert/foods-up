import { redirect } from "react-router-dom";
import AccountIcon from "../../Icon/AccountIcon";
import FoodsUpIcon from "../../Icon/FoodsUpIcon";
import HomeIcon from "../../Icon/HomeIcon";
import SearchIcon from "../../Icon/SearchIcon";


const Layout = () => {

  const isLocatedTo = (path: string): boolean => {
    return window.location.pathname === path;
  }
  

  return (
    <>
      {/* RESPONSIVE MAX 768PX */}
      <div className="h-16 flex items-center border-2 font-anton md:hidden">
        <h1 className="ml-8 text-2xl">FOODS&nbsp;</h1>
        <h1 className="text-2xl text-foods-orange">UP</h1>
      </div>

      <div onClick={() => redirect('/profil')} className="w-full border-t-2 h-12 absolute bottom-0 flex items-center justify-around md:hidden">
        <HomeIcon  color={`${isLocatedTo('/') ? '#ff9e44' : 'black'}`} className="text-xl cursor-pointer" />
        <AccountIcon color={`${isLocatedTo('/profil') ? '#ff9e44' : 'black'}`} className=" text-xl cursor-pointer" />
        <SearchIcon color={`${isLocatedTo('/search') ? '#ff9e44' : 'black'}`} className=" text-xl cursor-pointer" />
      </div>
      {/* RESPONSIVE MAX 768PX */}

      <div className="max-md:hidden w-24 border-r-[1px] border-r-[#aeaeae] h-screen flex flex-col">
        <div className="h-1/3">
          <FoodsUpIcon className="w-full h-24" />
        </div>
        <div className="flex flex-col">
          <HomeIcon color={`${isLocatedTo('/') ? '#ff9e44' : 'black'}`} className="text-2xl cursor-pointer mb-8"/>
          <AccountIcon color={`${isLocatedTo('/profil') ? '#ff9e44' : 'black'}`} className=" text-2xl cursor-pointer mb-8" />
          <SearchIcon color={`${isLocatedTo('/search  ') ? '#ff9e44' : 'black'}`} className=" text-2xl cursor-pointer mb-8" />
        </div>
      </div>
    </>
  );
};

export default Layout;
