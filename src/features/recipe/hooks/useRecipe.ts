import { useQuery } from "react-query";
import getRecipe from "../api/getRecipe";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useRecipe = (recipeId: number, enabled: boolean = true) => {

    // console.log("useRecipe", recipeId, enabled)

    const {isLoading,data} = useQuery({
        queryKey: ["recipe", recipeId],
        queryFn: () => getRecipe(recipeId),
        enabled
    })

    return {isLoading, data}
}

export default useRecipe;