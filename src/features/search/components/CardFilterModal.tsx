import { motion } from "framer-motion";
import CloseIcon from "../../Icon/CloseIcon";
import CardCategoryFilterList from "../../category/components/CardCategoryFilterList";
import CardFilterType from "../../Filter/Components/CardFilterType";

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
        className={` w-3/4 h-[90vh] overflow-y-scroll md:h-[450px] md:w-[60%] bg-white absolute rounded-lg border-[1px] border-gray-200 shadow-md z`}
      >
        <div className="w-full flex justify-center items-center top-0 py-2 border-[1px] border-grey-hover mb-12 relative">
          <h2 className="py-2 font-bold">Filtres :</h2>
          <div className="rounded-full hover:bg-grey-100 absolute top-[12px] left-4  mr-2">
            <CloseIcon
              handleModalStatus={() => handleModalStatus(displayFilter)}
              className="h-[35px] border-0 p-2"
            />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <CardFilterType
            nameInput="category"
            title="Catégories :"
            placeHolder="Rechercher une catégorie ... "
            children={CardCategoryFilterList()}
          />
          <CardFilterType
          nameInput="ingredient"
            title="Ingrédients :"
            placeHolder="Rechercher un ingrédient "
            children={<div>test</div>}
            // children={CardIngredientFilterList()}
          />
          <CardFilterType
            nameInput="apport"
            title="Apports nutritionnels :"
            placeHolder="Rechercher un ingrédient "
            children={<div>test</div>}
            // children={CardIngredientFilterList()}
          />
          <CardFilterType
            nameInput="preparation"
            title="Difficulté de préparation :"
            placeHolder="Rechercher un ingrédient "
            children={<div>test</div>}
            // children={CardIngredientFilterList()}
          />
          <CardFilterType
            nameInput="cuisson"
            title="Type de cuisson :"
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
