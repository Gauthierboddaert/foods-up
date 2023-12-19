import { easeInOut, motion, spring } from "framer-motion";
import PlusIcon from "../../Icon/PlusIcon";
import LessIcon from "../../Icon/LessIcon";

interface FoldActionButtonProps {
  className?: string;
  children: React.ReactNode;
  isFoldUp: boolean;
  setIsFoldUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const FoldActionButton = ({
  children,
  className,
  isFoldUp,
  setIsFoldUp,
}: FoldActionButtonProps) => {
  const handleFoldAction = () => {
    isFoldUp ? setIsFoldUp(false) : setIsFoldUp(true);
  };

  const RenderIconFoldAction = () => {
    if (isFoldUp) {
      return (
        <PlusIcon
          onClick={() => handleFoldAction()}
          isDisabled={isFoldUp}
          className="w-5 h-5"
        />
      );
    }

    return (
      <LessIcon
        onClick={() => handleFoldAction()}
        isDisabled={isFoldUp}
        className="w-5 h-5"
      />
    );
  };

  return (
    <motion.div
      className={className}
      initial={{ height: 0 }} // Hauteur initiale
      animate={{ height: "auto" }} // Hauteur finale (auto pour s'ajuster au contenu)
      transition={{ duration: 0.5, ease: "easeInOut" }} // Durée et fonction d'animation
    >
      {RenderIconFoldAction()}
      {children}
    </motion.div>
  );
};

export default FoldActionButton;
