import Category from "../type/Category";
import CardCategoriesLoader from "./CardCategoriesLoader";
import CardCategory from "./CardCategory";
import useCategories from "../hooks/useCategories";

const CardCategoriesList = () => {
  const { isLoading, data } = useCategories();

  if (isLoading) {
    return <CardCategoriesLoader />;
  }

  return (
    <>
      <div className="w-full h-12 flex justify-center mb-4">
        <div className="w-[500px] h-12 flex items-center overflow-x-scroll">
          {data.map((category: Category, index: number) => (
            <CardCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardCategoriesList;
