import { useState } from "react";
import FoldActionButton from "../../button/components/FoldActionButton";
import SearchBar from "../../search/components/SearchBar";
import { motion } from "framer-motion";

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
    <div className="w-3/4">
      <FoldActionButton isFoldUp={isFoldUp} setIsFoldUp={setIsFoldUp}>
        <div className={`w-full ${className} `}>
          <p className="text-foods-orange font-bold mb-4 ml-4 border-b-[1px]">
            {title}
          </p>
        </div>
      </FoldActionButton>

      <motion.div className={`${isFoldUp ? "block" : "hidden"}`}>
        <SearchBar placeHolder={placeHolder} className="my-4" />
        <div className="w-full flex flex-wrap justify-center max-h-[180px] overflow-y-scroll">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default CardFilterType;
