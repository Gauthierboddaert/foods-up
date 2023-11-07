import Category from "../type/Category";
import logoCategories from "../../../../public/assets/logo-categories.jpg";

interface CategoryProps {
  category: Category;
}

const CardCategory = ({ category }: CategoryProps) => {

  return (
    <div className="hover:cursor-pointer flex ml-4 rounded-lg border-[0.5px] border-[#d5d5d5]">
      <div className="w-14 h-max">
        <img className="rounded-l-lg" src={logoCategories} alt="" />
      </div>
      <div className="flex items-center min-w-[94px]">
        <p className="px-2 text-xs w-auto">{category.name}</p>
      </div>
    </div>
  );
};

export default CardCategory;
