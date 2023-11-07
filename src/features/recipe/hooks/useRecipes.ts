import getRecipes from "../api/getRecipes";
import { useQuery } from "react-query";

const useRecipes = (offset: number) => {
  const { isLoading, data } = useQuery({
    queryKey: [`recipesId_${offset}`],
    queryFn: () => getRecipes(offset),
  });

  return { offset, isLoading, data };
};

export default useRecipes;
