import Category from "../../category/type/Category";
import File from "../../File/type/File";
import Ingredient from "../../ingredients/type/Ingredient";
import RecipeStep from "../../recipeStep/type/RecipeStep";
import Like from "./Like";

interface Recipe {
    id: number, 
    name: string, 
    users: [],
    categories: Category[],
    file: File[],
    likes: Like[]
    ingredients: Ingredient[],
    creationTime: number,
    recipeStep: RecipeStep[],
    numberOfPersons: number,
    glucide: number,
    proteine: number,
    lipide: number
}

export interface RecipeId {
    id: number
}



export default Recipe ;