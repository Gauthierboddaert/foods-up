import useCategories from "../hooks/useCategories";
import Category from "../type/Category";
import CardCategoriesLoader from "./CardCategoriesLoader";
import CardCategory from "./CardCategory";

const CardFilterCategoryList = () => {
  const { data, isLoading } = useCategories();

  if (isLoading) {
    return <CardCategoriesLoader />;
  }

  return (
    <div className="w-full ml-4">
      <p className="underline text-foods-orange">Category :</p>
      <div className="h-[200px] w-full overflow-y-scroll">
        {data?.map((category: Category) => (
          <CardCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CardFilterCategoryList;
