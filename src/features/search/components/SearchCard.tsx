import FilterIcon from "../../Icon/FilterIcon";
import SearchBar from "./SearchBar";
import DialogSearch from "../../Dialog/Components/DialogSearch";
import { useState } from "react";
import CardFilterModal from "./CardFilterModal";

interface SearchCardProps {
  placeholder: string;
}

const SearchCard = ({ placeholder }: SearchCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalStatus = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="w-full">
      <SearchBar placeHolder={placeholder} className="mt-12" nameInput="name" />
      <DialogSearch
        children={
          <CardFilterModal
            handleModalStatus={handleModalStatus}
            displayFilter={isOpen}
          />
        }
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        button={<FilterIcon className="w-[20px] h-[20px] fill-current" />}
      />
    </div>
  );
};

export default SearchCard;
