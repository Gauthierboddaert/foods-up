import Category from "../type/Category";
import defaultImage from "../../../../public/assets/defaultImage.jpg";
import { Link } from "react-router-dom";

interface CategoryProps {
  category: Category;
}

const CardCategory = ({ category }: CategoryProps) => {

  return (
    <Link to={`/category/${category.name}`}>
      <div
        className="hover:cursor-pointer flex ml-4 rounded-lg border-[0.5px] border-[#d5d5d5]"
      >
        <div className="w-14 h-max">
          {category.file.length !== 0 ? (
            <img
              className="rounded-l-lg min-h-[40px]"
              src={category.file[0].imageName}
              alt=""
            />
          ) : (
            <img
              className="rounded-l-lg min-h-[40px]"
              src={defaultImage}
              alt=""
            />
          )}
        </div>
        <div className="flex items-center min-w-[94px]">
          <p className="px-2 text-xs w-auto">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardCategory;
