import { useState } from "react";
import { motion } from "framer-motion";
import HeartIcon from "../../Icon/hearIcon";

interface LikeCardProps {
  liked: boolean;
}

const LikeCard = ({ liked}: LikeCardProps) => {
  const [isLiked, setIsLiked] = useState(liked);

  return (
    <motion.div
      className="hover:cursor-pointer"
      onClick={() => {
        isLiked ? setIsLiked(false) : setIsLiked(true);
      }}
    >
      <HeartIcon isLiked={isLiked} fill={`${isLiked ? "red" : "white"}`} />
    </motion.div>
  );
};

export default LikeCard;


