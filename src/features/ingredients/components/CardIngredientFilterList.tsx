import CardCategoriesLoader from "../../category/components/CardCategoriesLoader";
import CardCategoryFilter from "../../category/components/CardCategoryFilter";
import useCategories from "../../category/hooks/useCategories";
import Category from "../../category/type/Category";
import SearchBar from "../../search/components/SearchBar";


const CardIngredientFilterList = () => {
  const { data, isLoading } = useCategories();

  if (isLoading) {
    return <CardCategoriesLoader />;
  }

  return (
    <div className="w-3/4 pt-12 ">
      <p className="underline text-foods-orange font-bold mb-4 ml-4">
        Liste d'ingrédients :
      </p>
      <SearchBar placeHolder="Rechercher un ingrédient ... " className="my-4" />
      <div className="w-full flex flex-wrap justify-center h-[180px] overflow-y-scroll">
        {data?.map((category: Category) => (
          <CardCategoryFilter key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CardIngredientFilterList;
