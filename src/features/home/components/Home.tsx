import CardCategoriesList from "../../category/components/CardCategoriesList";
import CardBestRecipeLoading from "../../recipe/components/CardBestRecipeLoader";
import CardRecipeList from "../../recipe/components/CardRecipeList";

const Home = () => {
  return (
    <div className="w-full -screen flex">
      <div className="w-full lg:w-4/6 flex max-lg:justify-center">
        <div className="w-full mt-4">
          <CardCategoriesList />
          <div className="w-full flex justify-center">
            <CardRecipeList />
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
