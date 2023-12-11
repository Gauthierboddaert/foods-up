import useRecipe from "../hooks/useRecipe";
import { RecipeId } from "../type/Recipe";

interface RecipeSearchProps {
    recipeId: RecipeId
}   

const CardRecipeSearch = ({ recipeId }: RecipeSearchProps) => {
    const recipe = useRecipe(recipeId.id);

    
};

export default CardRecipeSearch;