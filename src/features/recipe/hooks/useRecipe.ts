import { useQuery } from "react-query";
import getRecipe from "../api/getRecipe";

const useRecipe = (recipeId: number) => {
    const {isLoading,data} = useQuery({
        queryKey: ["recipe", recipeId],
        queryFn: () => getRecipe(recipeId)
    })

    return {isLoading, data}
}

export default useRecipe;