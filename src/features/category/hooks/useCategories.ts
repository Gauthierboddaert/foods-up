import getCategories from "../api/getCategories";
import { useQuery } from "react-query";

const useCategories = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { isLoading, data };
};

export default useCategories;
