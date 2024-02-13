import EyeIcon from "../../Icon/EyeIcon";
import { motion } from "framer-motion";

const ShowCard = () => {
  return (
    <motion.div
      className="hover:cursor-pointer"
      onClick={() => console.log("liked")}
    >
      <EyeIcon width={20} height={20} color="black" />
    </motion.div>
  );
};

export default ShowCard;
