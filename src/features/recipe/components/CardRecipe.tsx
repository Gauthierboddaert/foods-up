import moi from "../../../../public/assets/moi.jpg";
import defaultRecipe from "../../../../public/assets/ham.jpeg";
import { RecipeId } from "../type/Recipe";
import useRecipe from "../hooks/useRecipe";
import CardRecipeLoader from "./CardRecipeLoader";
import { useInView } from "react-intersection-observer";
import LikeCard from "../../Like/components/LikeCard";
import ShowCard from "../../show/components/ShowCard";

interface RecipeIdProps {
  recipeId: RecipeId;
}

const CardRecipe = ({ recipeId }: RecipeIdProps) => {
  const { ref, inView } = useInView({
    rootMargin: "4500px",
  });

  const { data, isLoading } = useRecipe(recipeId.id, inView);
  
  if (!data || isLoading) {
    return (
      <div ref={ref}>
        <CardRecipeLoader />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center w-full">
        <hr className="border-1 border-solid border-foods-orange w-72 my-4" />
      </div>
      <div className="w-[450px] mb-2.5 max-sm:w-[375px]">
        <div className=" bg-white w-full flex items-center py-3 border-b-[1px]">
          <img
            className="mx-3 w-7 h-7 hover:cursor-pointer rounded-full inset-0 object-cover transition duration-300 ease-in-out transform scale-125"
            src={moi}
            alt=""
          />
          <p className="text-sm">Gauthier Boddaert</p>
          <p className="text-xs mx-1">1h</p>
        </div>
        <div className={`img-recipe bg-transparent relative`}>
          {/* <h1
            id="show"
            className={`p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center`}
          >
            voir plus
          </h1> */}
          {data?.file.length !== 0 ? (
            <img
              className={`inset-0 w-full object-cover mx-auto max-h-[400px]`}
              src={data?.file[0].imageName}
              alt=""
            />
          ) : (
            <img
              className={`inset-0 w-full object-cover mx-auto max-h-[500px]`}
              src={defaultRecipe}
              alt=""
            />
          )}
        </div>
        <div>
          <div className="flex px-2 py-2 gap-2">
            <LikeCard liked={data.likes[0].isLike} />
            <ShowCard />
          </div>
          <div className="flex flex-col px-2">
            <p className=" font-bold text-sm">Gauthier Boddaert</p>
            <p className="font-light text-sm line-clamp-2 pb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos tenetur maxime odio pariatur sapiente fuga ratione
              exercitationem qui molestias porro? Magni quo expedita possimus
              amet commodi accusamus cum, necessitatibus eveniet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
