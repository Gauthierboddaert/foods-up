import CardCategoriesLoader from "../../category/components/CardCategoriesLoader";
import CardRecipeLoader from "../../recipe/components/CardRecipeLoader";

const Home = () => {
  console.log("go");

  return (
    <div className="w-full h-screen">
      <div className="w-full lg:w-4/6 flex max-lg:justify-center">
        <div className="w-full">
          <CardCategoriesLoader />
          <div className="w-full flex justify-center">
            <CardRecipeLoader />
          </div>
        </div>
        <div className="hidden lg:flex">
          <div className=" w-12 h-6 bg-red-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
