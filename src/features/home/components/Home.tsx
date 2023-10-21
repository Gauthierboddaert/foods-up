import CardCategoriesLoader from "../../category/components/CardCategoriesLoader";
import CardBestRecipeLoading from "../../recipe/components/CardBestRecipeLoader";
import CardRecipeLoader from "../../recipe/components/CardRecipeLoader";

const Home = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-full lg:w-4/6 flex max-lg:justify-center">
        <div className="w-full mt-4">
          <CardCategoriesLoader />
          <div className="w-full flex justify-center">
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
