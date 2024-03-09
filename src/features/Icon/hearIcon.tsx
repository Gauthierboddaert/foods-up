import { FunctionComponent, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  fill?: string;
  isLiked: boolean;
};

const HeartIcon: FunctionComponent<Props> = ({
  width = 13,
  height = 12,
  className = "",
  fill = "white",
  isLiked,
}) => {
  const [borderColor, setBorderColor] = useState<string>(isLiked ? "none" : "black");

  return (
    <motion.svg
      onClick={() => {
        borderColor === "black"
          ? setBorderColor("none")
          : setBorderColor("black");
      }}
      whileTap={{ scale: 1.2 }}
      whileHover={{ scale: 1.1 }}
      className={`${className}`}
      width={width * 2}
      stroke={borderColor}
      style={{ strokeWidth: 2 + "px" }}
      height={height * 2}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill={fill}
          d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z"
        />
      </svg>
    </motion.svg>
  );
};

export default HeartIcon;
