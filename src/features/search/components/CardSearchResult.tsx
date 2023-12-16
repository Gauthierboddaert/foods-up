import useRecipe from "../../recipe/hooks/useRecipe";
import { RecipeId } from "../../recipe/type/Recipe";

interface CardSearchResultProps {
    recipeId: RecipeId;
}

const CardSearchResult = ({recipeId}: CardSearchResultProps) => {

    const {data, isLoading} = useRecipe(recipeId.id, true);

    return (
        <div>
            <h1>cocou</h1>
        </div>
    )
}

export default CardSearchResult;