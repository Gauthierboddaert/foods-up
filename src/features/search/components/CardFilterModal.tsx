import { motion } from "framer-motion";
import CloseIcon from "../../Icon/CloseIcon";
import CardCategoryFilterList from "../../category/components/CardCategoryFilterList";
import CardFilterType from "../../Filter/Components/CardFilterType";
import CardIngredientFilterList from "../../ingredients/components/CardIngredientFilterList";

interface CardFilterModalProps {
  displayFilter: boolean;
  handleModalStatus: (displayFilter: boolean) => void;
}

const CardFilterModal = ({
  displayFilter,
  handleModalStatus,
}: CardFilterModalProps) => {
  return (
    <div
      className={`${
        displayFilter ? "flex" : "hidden"
      } justify-center absolute w-full items-center h-screen`}
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.15 }}
        className={` w-3/4 h-[90vh] overflow-y-scroll md:h-[450px] bg-white absolute rounded-lg border-[1px] border-gray-200 shadow-md z`}
      >
        <div className="w-full flex justify-end sticky top-0 ">
          <CloseIcon
            handleModalStatus={() => handleModalStatus(displayFilter)}
            className="hover:cursor-pointer text-foods-orange w-[25px] h-[25px] fill-current mt-2 mr-2"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <CardFilterType
            title="Liste des catégories :"
            placeHolder="Rechercher une catégorie ... "
            children={CardCategoryFilterList()}
          />
          <CardFilterType
            title="Liste des ingrédients :"
            placeHolder="Rechercher un ingrédient "
            children={<div>test</div>}
            // children={CardIngredientFilterList()}
          />

          {/* <CardIngredientFilterList /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default CardFilterModal;
