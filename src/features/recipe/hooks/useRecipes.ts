import { useState } from "react";
import getRecipes from "../api/getRecipes";

const useRecipes = (offset: number) => {
    const [recipes, setRecipes] = useState<[]>([]);
    getRecipes(offset).then((recipes: []) => {
        setRecipes(recipes)
    });

    return recipes;
}

export default useRecipes;