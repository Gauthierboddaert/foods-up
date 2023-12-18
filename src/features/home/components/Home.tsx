import CardCategoriesList from "../../category/components/CardCategoriesList";
import CardBestRecipe from "../../recipe/components/CardBestRecipe";
import CardRecipeList from "../../recipe/components/CardRecipeList";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ x: -20 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.1 }}
      className="w-full -screen flex"
    >
      <div className="w-full lg:w-4/6 flex max-lg:justify-center">
        <div className="w-full mt-4">
          <CardCategoriesList />
          <div className="w-full flex justify-center">
            <CardRecipeList />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-end lg:w-2/6">
        <CardBestRecipe />
      </div>
    </motion.div>
  );
};

export default Home;
