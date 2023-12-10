import { useQuery } from "react-query";
import getCategory from "../api/getCategory";

const useCategory = (name: string|undefined) => {
    const { data, isLoading, error } = useQuery({
        queryKey: [`category_${name}`],
        queryFn: () => getCategory(name)
    });

    return { data, isLoading, error }
}

export default useCategory;