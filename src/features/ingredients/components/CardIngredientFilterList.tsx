import useIngredients from "../hooks/useIngredients";
import IngredientId from "../type/IngredientId";
import CardIngredientFilter from "./CardIngredientFilter";

const CardIngredientFilterList = () => {
  const { data, isLoading } = useIngredients(0);

  if (isLoading) {
    return "id Loading";
  }

  
  return (
    <>
      {data?.map((ingredientId: IngredientId) => {
        <CardIngredientFilter key={ingredientId.id} ingredientId={ingredientId} />;
      })}
    </>
  );
};

export default CardIngredientFilterList;
