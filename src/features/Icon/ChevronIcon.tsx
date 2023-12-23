import { AnimationControls, motion } from "framer-motion";

interface ChevronIconProps {
  className?: string;
  color?: string;
  onClick?: () => void;
  controls: AnimationControls;
}

const ChevronIcon = ({ className, color, onClick, controls }: ChevronIconProps) => {
 

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      onClick={() => {
        onClick && onClick();
      }}
      className={`${className} cursor-pointer`}
      viewBox="-50 0 320 512"
      initial={{ rotate: 90 }}
      animate={controls}
    >
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </motion.svg>
  );
};

export default ChevronIcon;
