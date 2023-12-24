import { useInView } from "react-intersection-observer";
import useRecipe from "../../recipe/hooks/useRecipe";
import { RecipeId } from "../../recipe/type/Recipe";
import CardSearchResultLoader from "./CardSearchResultLoader";
import Image from "../../image/components/Image";
import { motion } from "framer-motion";
import { useState } from "react";

interface CardSearchResultProps {
  recipeId: RecipeId;
}

const CardSearchResult = ({ recipeId }: CardSearchResultProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { data, isLoading } = useRecipe(recipeId.id, inView);
  const [open, setOpen] = useState<boolean>(false);
  
  if (!data || isLoading) {
    return (
      <div className="w-full flex justify-center md:w-auto" ref={ref}>
        <CardSearchResultLoader className="justify-center items-center" />
      </div>
    );
  }

  return (
    <>
      <motion.div
        onClick={() => setOpen(true)}
        className="w-full md:w-[250px] flex flex-col items-center mb-4 cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out"
      >
        <Image
          src={data?.file[0]}
          alt={data?.name}
          className="w-[190px] h-[190px] object-cover rounded-lg"
        />
        <motion.p className="text-[1.143rem] text-grey-200">
          {data?.name}
        </motion.p>
        <motion.div className="flex">
          <motion.p className="text-sm text-foods-orange flex ">
            0 j'aime
          </motion.p>
          <motion.p className="text-sm ml-4 mb-4 text-foods-orange flex items-center">
            (0 avis)
          </motion.p>
        </motion.div>
      </motion.div>

      {open && <div>test</div>}
    </>
  );
};

export default CardSearchResult;
