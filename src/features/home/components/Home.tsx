import CardCategoriesList from "../../category/components/CardCategoriesList";
import CardCategoriesLoader from "../../category/components/CardCategoriesLoader";
import useCategories from "../../category/hooks/useCategories";
import CardBestRecipeLoading from "../../recipe/components/CardBestRecipeLoader";
import CardRecipeLoader from "../../recipe/components/CardRecipeLoader";

const Home = () => {
  
  const categories = useCategories();

  return (
    <div className="w-full -screen flex">
      <div className="w-full lg:w-4/6 flex max-lg:justify-center">
        <div className="w-full mt-4">
          {0 === categories.length ? (
            <CardCategoriesLoader />
          ) : (
            <>
              <CardCategoriesList categories={categories} />
            </>
          )}
          <div className="w-full flex justify-center">
            {0 === categories.length ? (
              <div></div>
            ) : (
              <div></div>
            )}
            <CardRecipeLoader />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-end lg:w-2/6">
        <CardBestRecipeLoading />
      </div>
    </div>
  );
};

export default Home;
