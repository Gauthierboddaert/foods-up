import { useQuery } from "react-query";
import { IFormRecipeSearch } from "../../Form/type/FormType";
import { useEffect, useState } from "react";
import { RecipeId } from "../../recipe/type/Recipe";
import search from "../api/search";

const useSearch = (form: IFormRecipeSearch, type: string) => {
  const [resultIds, setResultIds] = useState<RecipeId[]>();

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["search", form, type],
    queryFn: () => search(form, type),
  });

  useEffect(() => {
    if (data !== undefined) {
      setResultIds(data);
    }
  }, [data, form]);

  return { resultIds, isLoading, isFetched };
};

export default useSearch;
