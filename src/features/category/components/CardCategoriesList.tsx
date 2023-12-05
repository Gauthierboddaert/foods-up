import { useQuery } from "react-query";
import Category from "../type/Category";
import CardCategoriesLoader from "./CardCategoriesLoader";
import CardCategory from "./CardCategory";
import getCategories from "../api/getCategories";

const CardCategoriesList = () => {
  
  const { isLoading, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,

  });

  return (
    <>
      {isLoading ? (
        <CardCategoriesLoader />
      ) : (
        <>
          <div className="w-full h-12 flex justify-center mb-4">
            <div className="w-[500px] h-12 flex items-center overflow-x-scroll">
              {data.map((category: Category, index: number) => (
                <CardCategory key={index} category={category} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
    /*  */
    // return (
    //   <>

    //   </>
    // );
  );
};

export default CardCategoriesList;
