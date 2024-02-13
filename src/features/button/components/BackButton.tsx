import { Link } from "react-router-dom";
import BackWardIcon from "../../Icon/BackWardIcon";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className }: BackButtonProps) => {
  return (
    <Link to={`/`}>
      <div className={`flex gap-2 ml-2 mt-4 hover:cursor-pointer ${className}`}>
        <BackWardIcon />
        <p className="text-base">Retour</p>
      </div>
    </Link>
  );
};

export default BackButton;
