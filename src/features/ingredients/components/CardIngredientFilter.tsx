import useIngredient from "../hooks/useIngredient";
import IngredientId from "../type/IngredientId";

interface CardIngredientFilterProps {
  ingredientId: IngredientId;
}

const CardIngredientFilter = ({ ingredientId }: CardIngredientFilterProps) => {
  const { data, isLoading } = useIngredient(ingredientId);
  console.log(data);
  if (isLoading) {
    return "";
  }

  

  return <div>coucou</div>;
};

export default CardIngredientFilter;
