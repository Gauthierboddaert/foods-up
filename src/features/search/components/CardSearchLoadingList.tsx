import CardSearchResultLoader from "./CardSearchResultLoader";
import { motion } from "framer-motion";

import SearchCard from "./SearchCard";

const CardSearchLoadingList = () => {
  return (
    <motion.div initial={{ x: -20 }} animate={{ x: 0 }} className="w-full">
      <SearchCard />
      <div className="flex flex-col md:flex-row md:justify-center">
        <CardSearchResultLoader className="justify-center" />
        <CardSearchResultLoader className="justify-center" />
        <CardSearchResultLoader className="justify-center" />
      </div>
    </motion.div>
  );
};

export default CardSearchLoadingList;
