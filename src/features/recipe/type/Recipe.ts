import Category from "../../category/type/Category";
import Image from "../../image/type/Image";
import Ingredient from "../../ingredients/type/Ingredient";
import RecipeStep from "../../recipeStep/type/RecipeStep";
import Like from "./Like";

interface Recipe {
    id: number, 
    name: string, 
    users: [],
    categories: Category[],
    image: Image,
    like: Like[]
    ingredients: Ingredient[],
    creationTime: number,
    recipeStep: RecipeStep[],
    numberOfPersons: number,
    glucide: number,
    proteine: number,
    lipide: number
}

export default Recipe;