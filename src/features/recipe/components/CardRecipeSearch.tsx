import useRecipe from "../hooks/useRecipe";
import { RecipeId } from "../type/Recipe";

interface RecipeSearchProps {
    recipeId: RecipeId
}   

const CardRecipeSearch = ({ recipeId }: RecipeSearchProps) => {
    const recipe = useRecipe(recipeId.id);

    console.log(recipe);
    
};

export default CardRecipeSearch;