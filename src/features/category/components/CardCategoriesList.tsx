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
          <div className="w-full h-12 flex justify-center">
            <div className="w-[500px] h-12 flex items-center overflow-x-scroll">
              {data.map((category: Category) => (
                <CardCategory key={category.id} category={category} />
              ))}
            </div>
          </div>
          <div className="flex justify-center w-full">
            <hr className="border-1 border-solid border-foods-orange w-72 my-4" />
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
