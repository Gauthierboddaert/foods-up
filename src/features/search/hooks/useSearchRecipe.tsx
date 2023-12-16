import { useQuery } from "react-query";
import getSearchRecipe from "../api/getSearchRecipe";

const useSearchRecipe = (name: string) => {
  return useQuery({
    queryKey: ["searchRecipe"],
    queryFn: () => getSearchRecipe(name),
  });
};

export default useSearchRecipe;
