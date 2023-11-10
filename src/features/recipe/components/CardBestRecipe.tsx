import useBestRecipe from "../hooks/useBestRecipe";
import CardBestRecipeLoading from "./CardBestRecipeLoader";

const CardBestRecipe = () => {
  const { isLoading, data } = useBestRecipe();

  if (isLoading || data === undefined) {
    return <CardBestRecipeLoading />;
  }

  console.log(data);

  return  (
    <div className="w-[300px] h-screen bg-red-600">{data.id}</div>
  
  );
};

export default CardBestRecipe;
