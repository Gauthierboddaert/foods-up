import { useQuery } from "react-query";
import { RecipeId } from "../type/Recipe";
import getRecipe from "../api/getRecipe";

interface RecipeIdProps {
    recipeId: RecipeId
}

const CardRecipe = ({recipeId}: RecipeIdProps) => {

    // const { data, error } = useQuery({
    // queryKey: [`recipe_${recipeId.id}`],
    //     queryFn: () => () => getRecipe(recipeId.id),
    //   });

    // console.log(error)

    return (
        <div></div>
    )
}

export default CardRecipe;