import { motion } from "framer-motion";
import CloseIcon from "../../Icon/CloseIcon";
import CardFilterCategory from "../../category/components/CardFilterCategoryList";

interface CardFilterModalProps {
  displayFilter: boolean;
  handleModalStatus: (displayFilter: boolean) => void;
}

const CardFilterModal = ({ displayFilter, handleModalStatus }: CardFilterModalProps) => {
  return (
    <div className={`${displayFilter ? "flex" : "hidden"} justify-center h-[300px]`}>
      <motion.div
        initial={{
          opacity: 1,
          scale: displayFilter ? 0.5 : 0,
        }}
        animate={{
          opacity: 1,
          scale: displayFilter ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
        className={` w-3/4 h-[300px] overflow-y-scroll bg-white absolute mt-8 rounded-lg border-[1px] border-gray-200 shadow-md z`}
      >
        
        <div className="w-full flex justify-end">
            <CloseIcon handleModalStatus={ () => handleModalStatus(displayFilter) } className="hover:cursor-pointer text-foods-orange w-[25px] h-[25px] fill-current mt-2 mr-2" />
        </div>
        <CardFilterCategory  />
        <CardFilterCategory  />
        

      </motion.div>
    </div>
  );
};

export default CardFilterModal;
