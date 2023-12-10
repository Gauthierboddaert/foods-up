import { useQuery } from "react-query";

const useCategory = () => {
    const {data} = useQuery({
        queryKey: ["category"],
        queryFn: () => fetch("http://localhost:3000/api/category").then(res => res.json())
    });

    return {data}
}

export default useCategory;