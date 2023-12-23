import { useState } from "react";
import FoldActionButton from "../../button/components/FoldActionButton";
import SearchBar from "../../search/components/SearchBar";

interface CardFilterTypeProps {
  children: React.ReactNode;
  placeHolder?: string;
  title: string;
  className?: string;
}

const CardFilterType = ({
  children,
  placeHolder,
  title,
  className,
}: CardFilterTypeProps) => {
  const [isFoldUp, setIsFoldUp] = useState<boolean>(false);

  return (
    <FoldActionButton
      isFoldUp={isFoldUp}
      setIsFoldUp={setIsFoldUp}
      className="w-3/4"
    >
      <div className={`w-full ${className} `}>
        <p className="text-foods-orange font-bold mb-4 ml-4 border-b-[1px]">
          {title}
        </p>
        <div className={`${isFoldUp ? "hidden" : "block"}`}>
          <SearchBar placeHolder={placeHolder} className="my-4" />
          <div className="w-full flex flex-wrap justify-center h-[180px] overflow-y-scroll">
            {children}
          </div>
        </div>
      </div>
    </FoldActionButton>
  );
};

export default CardFilterType;
