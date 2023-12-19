import { useQuery } from "react-query";
import getIngredient from "../api/getIngredient";
import IngredientId from "../type/IngredientId";

const useIngredient = (id: IngredientId) => {
  return useQuery({
    queryKey: ["ingredient", id],
    queryFn: () => () => getIngredient(id),
  });
};

export default useIngredient;
