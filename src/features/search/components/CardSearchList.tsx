import useSearchRecipe from "../hooks/useSearchRecipe";
import { motion } from "framer-motion";
import CardSearchLoadingList from "./CardSearchLoadingList";
import Form from "../../Form/components/Form";
import SearchCard from "./SearchCard";
import CardSearchResult from "./CardSearchResult";

const CardSearchList = () => {
  
  const { data, isLoading } = useSearchRecipe("");

  if (isLoading) {
    return <CardSearchLoadingList />;
  }

  return (
    <motion.div initial={{ x: -20 }} animate={{ x: 0 }} className="w-full">
      <Form>
        <SearchCard />
        <div className="lg:flex lg:flex-row lg:justify-center">
          <div className="w-full flex flex-col md:flex-row md:justify-center md:flex-wrap mt-12 lg:w-3/4">
            {data?.map((recipe) => (
              <CardSearchResult key={recipe.id} recipeId={recipe} />
            ))}
          </div>
          {/* <div className="hidden lg:w-1/4 lg:flex lg:bg-foods-orange lg:h-screen"></div> */}
        </div>
      </Form>
    </motion.div>
  );
};

export default CardSearchList;
