import { useQuery } from "react-query";
import getIngredients from "../api/getIngredients";

const useIngredients = (offset: number) => {  
    return useQuery({
        queryKey: ['ingredients_offset', offset],
        queryFn: () => getIngredients(offset),
    })
}

export default useIngredients;