import getTotalRecipe from "../api/getTotalRecipe";
import { useQuery } from "react-query";

const useTotalRecipe = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["totalRecipe"],
    queryFn: () => getTotalRecipe(),
  });

  return { isLoading, data };
};

export default useTotalRecipe;
