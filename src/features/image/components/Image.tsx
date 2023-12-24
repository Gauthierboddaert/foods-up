import defaultImage from "../../../../public/assets/defaultImage.jpg";
import File from "../../File/type/File";
import { motion } from "framer-motion";

interface ImageProps {
  src: File | undefined;
  alt: string | undefined;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Image = ({ src, alt, className, onMouseEnter }: ImageProps) => {
  if (undefined === src?.imageName) {
    return (
      <motion.img className={`${className}`} src={defaultImage} alt="defaultImage" />
    );
  }

  return (
    <motion.img
      onMouseEnter={onMouseEnter}
      className={className}
      src={src.imageName}
      alt={alt}
    />
  );
};

export default Image;
