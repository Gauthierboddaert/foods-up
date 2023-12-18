import { useState } from "react";
import FilterIcon from "../../Icon/FilterIcon";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

const SearchCard = () => {
  const [displayFilter, setDisplayFilter] = useState(false);

  const onClick = () => {
    if (displayFilter) {
      setDisplayFilter(false);
    } else {
      setDisplayFilter(true);
    }
  };

  return (
    <div className="w-full">
      <SearchBar />
      <div onClick={() => onClick()} className="w-min">
        <FilterIcon className="w-[20px] h-[20px] fill-current" />
      </div>

      <div className={`${displayFilter ? "flex" : "hidden"} justify-center`}>
        <motion.div
          initial={{
            opacity: 1,
            scale: displayFilter ? 0.8 : 0,
          }}
          animate={{
            opacity: 1,
            scale: displayFilter ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 120 ,duration: 0.1 }}
          className={` w-3/4 h-[300px] bg-white absolute mt-12 rounded-lg border-[1px] border-gray-200 shadow-md z`}
        ></motion.div>
      </div>
    </div>
  );
};

export default SearchCard;
