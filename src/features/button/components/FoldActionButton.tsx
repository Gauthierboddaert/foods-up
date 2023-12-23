import { motion, useAnimation } from "framer-motion";
import ChevronIcon from "../../Icon/ChevronIcon";

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

  const controls = useAnimation();

  const handleFoldAction = () => {
    isFoldUp ? setIsFoldUp(false) : setIsFoldUp(true);

    controls.start({
      rotate: isFoldUp ? 0 : 90,
    });
  };

  

  return (
    <motion.div className={className}>
      <div
        onClick={() => handleFoldAction()}
        className="flex w-full cursor-pointer"
      >
        {children}
        <ChevronIcon
          controls={controls}
          onClick={() => handleFoldAction()}
          className="w-4 h-4 mt-[4px]"
        />
      </div>
    </motion.div>
  );
};

export default FoldActionButton;
