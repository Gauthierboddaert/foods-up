import { FunctionComponent, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  fill?: string;
};

const HeartIcon: FunctionComponent<Props> = ({
  width = 13,
  height = 12,
  color = "black",
  className = "",
  fill = "white",
}) => {
  const [hover, setHover] = useState<string>(color);

  return (
    <motion.svg
      onHoverStart={() => setHover('gray')}
      onHoverEnd={() => setHover(color)}
      whileHover={{ scale: 1.1 }}
      className={className}
      width={width}
      height={height}
      viewBox="0 0 13 12"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.08691 2.05847L6.34473 2.33972L6.62598 2.08191C7.39941 1.30847 8.50098 0.956909 9.55566 1.14441C11.1729 1.40222 12.3682 2.80847 12.3682 4.4491V4.56628C12.3682 5.55066 11.9463 6.48816 11.2432 7.14441L7.00098 11.1053C6.83691 11.2694 6.60254 11.3397 6.36816 11.3397C6.11035 11.3397 5.87598 11.2694 5.71191 11.1053L1.46973 7.14441C0.766602 6.48816 0.368164 5.55066 0.368164 4.56628V4.4491C0.368164 2.80847 1.54004 1.40222 3.15723 1.14441C4.21191 0.956909 5.31348 1.30847 6.08691 2.05847C6.08691 2.08191 6.06348 2.05847 6.08691 2.05847ZM6.34473 3.93347L5.29004 2.85535C4.77441 2.36316 4.04785 2.12878 3.34473 2.24597C2.2666 2.43347 1.49316 3.34753 1.49316 4.4491V4.56628C1.49316 5.24597 1.75098 5.87878 2.24316 6.3241L6.36816 10.1678L10.4697 6.3241C10.9619 5.87878 11.2432 5.24597 11.2432 4.56628V4.4491C11.2432 3.34753 10.4463 2.43347 9.36816 2.24597C8.66504 2.12878 7.93848 2.36316 7.42285 2.85535L6.34473 3.93347Z"
        fill={fill}
      />
    </motion.svg>
  );
};

export default HeartIcon;
