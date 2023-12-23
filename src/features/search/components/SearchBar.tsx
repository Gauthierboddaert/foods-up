import SearchIcon from "../../Icon/SearchIcon";
import Input from "../../button/components/Input";

interface SearchBarProps {
  className?: string;
  placeHolder: string;
}

const SearchBar = ({ className, placeHolder }: SearchBarProps) => {
  return (
    <div className={`w-full flex justify-center items-center ${className} `}>
      <div className="relative w-3/4">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <Input
          name="name"
          className="w-full h-12 pl-10 pr-4 border-[1px] border-[] rounded-md"
          placeHolder={placeHolder}
        />
      </div>
    </div>
  );
};

export default SearchBar;
