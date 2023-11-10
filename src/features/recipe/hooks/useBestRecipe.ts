import { useQuery } from "react-query";
import getBestRecipe from "../api/getBestRecipe";

const useBestRecipe = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["bestRecipe"],
    queryFn: () => getBestRecipe(),
  });

  return { isLoading, data };
};

export default useBestRecipe;
