import SearchIcon from "../../Icon/SearchIcon";

interface SearchBarProps {
  className?: string;
  placeHolder?: string;
}

const SearchBar = ({ className, placeHolder }: SearchBarProps) => {
  return (
    <div className={`w-full flex justify-center items-center ${className} `}>
      <div className="relative w-3/4">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          className="w-full h-12 pl-10 pr-4 border-[1px] border-[] rounded-md"
          type="text"
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
};

export default SearchBar;
