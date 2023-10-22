import Category from "../type/Category";
import CardCategory from "./CardCategory";

interface CategoriesProps {
  categories: Category[];
}

const CardCategoriesList = ({ categories }: CategoriesProps) => {
  return (
    <>
      <div className="w-full h-12 flex justify-center">
        <div className="w-[500px] h-12 flex items-center overflow-x-scroll">
          {categories.map((category: Category) => (
            <CardCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <hr className="border-1 border-solid border-foods-orange w-72 my-4" />
      </div>
    </>
  );
};

export default CardCategoriesList;
