import { useInView } from "react-intersection-observer";
import useRecipe from "../../recipe/hooks/useRecipe";
import { RecipeId } from "../../recipe/type/Recipe";
import CardSearchResultLoader from "./CardSearchResultLoader";
import Image from "../../image/components/Image";
import { Link } from "react-router-dom";
import HeartIcon from "../../Icon/hearIcon";

interface CardSearchResultProps {
  recipeId: RecipeId;
}

const CardSearchResult = ({ recipeId }: CardSearchResultProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { data, isLoading } = useRecipe(recipeId.id, inView);

  if (!data || isLoading) {
    return (
      <div ref={ref}>
        <CardSearchResultLoader className="justify-center" />
      </div>
    );
  }

  return (
    <div className=" w-full md:w-[295px] flex flex-col items-center">
      <Link to={"/"} className="cursor-pointer">
        <Image
          src={data?.file[0]}
          alt={data?.name}
          className="w-[190px] h-[190px] object-cover rounded-lg"
        />
        <p className="text-[1.143rem] text-grey-200">{data?.name}</p>
        <p className="text-sm mb-4 text-foods-orange flex items-center">
          0 j'aime
        </p>
      </Link>
    </div>
  );
};

export default CardSearchResult;
