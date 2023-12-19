import Image from "../../image/components/Image";
import Category from "../type/Category";

interface CardCategoryFilterProps {
  category: Category;
}

const CardCategoryFilter = ({ category }: CardCategoryFilterProps) => {
  return (
    <div className="w-[200px] flex mt-2 flex-col items-center">
      <div className="flex w-44 rounded-lg hover:cursor-pointer items-center border border-grey-100">
        <Image
          src={category.file[0]}
          alt={category.name}
          className="w-12 h-12 object-cover rounded-tl-lg rounded-bl-lg"
        />
        <p className="text-center w-full">{category.name}</p>
      </div>
    </div>
  );
};

export default CardCategoryFilter;
