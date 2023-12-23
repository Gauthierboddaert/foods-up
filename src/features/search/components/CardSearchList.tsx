import useSearchRecipe from "../hooks/useSearchRecipe";
import { motion } from "framer-motion";
import SearchCard from "./SearchCard";
import CardSearchResult from "./CardSearchResult";
import Form from "../../Form/components/Form";
import CardSearchResultLoader from "./CardSearchResultLoader";
import { IFormTypeRecipe } from "../../Form/type/FormTypeRecipe";
import { useState } from "react";

const CardSearchList = () => {
  const defaultValues: IFormTypeRecipe = {
    name: "",
  };

  const [recipes, setRecipes] = useState<IFormTypeRecipe>(defaultValues);

  const { isLoading, data } = useSearchRecipe(recipes);

  return (
    <motion.div initial={{ x: -20 }} animate={{ x: 0 }} className="w-full">
      <Form setValueForm={setRecipes} valueForm={recipes}>
        <SearchCard />
        <div className="lg:flex lg:flex-row lg:justify-center">
          <div className="w-full flex flex-col md:flex-row md:justify-center md:flex-wrap mt-12 lg:w-3/4">
            {isLoading ? (
              <>
                <CardSearchResultLoader className="justify-center" />
                <CardSearchResultLoader className="justify-center" />
                <CardSearchResultLoader className="justify-center" />
              </>
            ) : (
              data?.map((recipe) => (
                <CardSearchResult key={recipe.id} recipeId={recipe} />
              ))
            )}
          </div>
          {/* <div className="hidden lg:w-1/4 lg:flex lg:bg-foods-orange lg:h-screen"></div> */}
        </div>
      </Form>
    </motion.div>
  );
};

export default CardSearchList;
