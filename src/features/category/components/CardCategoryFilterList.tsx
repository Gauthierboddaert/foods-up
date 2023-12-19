import SearchBar from "../../search/components/SearchBar";
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
    <div className="w-3/4 ">
      <p className="underline text-foods-orange font-bold mb-4 ml-4">
        Liste de catégories :
      </p>
      <SearchBar placeHolder="Rechercher une catégorie ... " className="my-4" />
      <div className="w-full flex flex-wrap justify-center h-[180px] overflow-y-scroll">
        {data?.map((category: Category) => (
          <CardCategoryFilter key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CardFilterCategoryList;
