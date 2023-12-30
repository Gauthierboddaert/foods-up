import useSearch from "../hooks/useSearchRecipe";
import { motion } from "framer-motion";
import SearchCard from "./SearchCard";
import CardSearchResult from "./CardSearchResult";
import Form from "../../Form/components/Form";
import CardSearchResultLoader from "./CardSearchResultLoader";
import { IFormType } from "../../Form/type/FormTypeRecipe";
import { useState } from "react";

interface CardSearchListProps {
  placeholder: string;
  type?: string;
  categoryName?: string;
}

const CardSearchList = ({
  placeholder,
  type = "recipe",
  categoryName = "",
}: CardSearchListProps) => {
  const [result, setResult] = useState<IFormType>({
    name: "",
    categoryName: categoryName,
  });

  const { isLoading, resultIds, isFetched } = useSearch(result, type);

  return (
    <motion.div initial={{ x: -20 }} animate={{ x: 0 }} className="w-full">
      <Form categoryName={categoryName} setValueForm={setResult}>
        <SearchCard placeholder={placeholder} />
        <div className="lg:flex lg:flex-row lg:justify-center">
          <div className="w-full flex flex-col md:flex-row md:justify-center md:flex-wrap mt-12 lg:w-3/4">
            {isLoading ? (
              <>
                <CardSearchResultLoader className="justify-center" />
                <CardSearchResultLoader className="justify-center" />
                <CardSearchResultLoader className="justify-center" />
              </>
            ) : (
              <>
                {resultIds?.map((recipe) => (
                  <CardSearchResult key={recipe.id} recipeId={recipe} />
                ))}
                {isFetched && resultIds?.length === 0 && (
                  <div className="w-full flex justify-center">
                    <p className="text-2xl text-foods-orange">
                      Aucune recette ne correspond à votre recherche
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
          {/* <div className="hidden lg:w-1/4 lg:flex lg:bg-foods-orange lg:h-screen"></div> */}
        </div>
      </Form>
    </motion.div>
  );
};

export default CardSearchList;
