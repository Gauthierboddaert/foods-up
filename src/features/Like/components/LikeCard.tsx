import { useState } from "react";
import { motion } from "framer-motion";
import HeartIcon from "../../Icon/hearIcon";

const LikeCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      className="hover:cursor-pointer"
      onClick={() => {
        isLiked ? setIsLiked(false) : setIsLiked(true);
      }}
    >
      <HeartIcon width={20} height={20} fill={`${isLiked ? "red" : "black"}`} />
    </motion.div>
  );
};

export default LikeCard;
