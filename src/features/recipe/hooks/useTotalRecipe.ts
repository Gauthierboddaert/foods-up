import { useEffect, useState } from "react";
import getTotalRecipe from "../api/getTotalRecipe";

const useTotalRecipe = () => {
  const [totalRecipe, setTotalRecipe] = useState<number>(0);

  useEffect(() => {
    getTotalRecipe().then((data: number) => {
      setTotalRecipe(data);
    });
  }, []);

  return totalRecipe;
};

export default useTotalRecipe;
