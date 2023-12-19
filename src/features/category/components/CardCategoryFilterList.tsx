import useCategories from "../hooks/useCategories";
import Category from "../type/Category";
import CardCategoriesLoader from "./CardCategoriesLoader";
import CardCategoryFilter from "./CardCategoryFilter";

const CardFilterCategoryList = () => {
  const { data, isLoading } = useCategories();

  if (isLoading) {
    return <CardCategoriesLoader />;
  }

  return (
    <>
      {data?.map((category: Category) => (
        <CardCategoryFilter key={category.id} category={category} />
      ))}
    </>
  );
};

export default CardFilterCategoryList;
