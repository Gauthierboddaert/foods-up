import { Link } from "react-router-dom";
import BackWardIcon from "../../Icon/BackWardIcon";

const BackButton = () => {
  return (
    <Link to={`/`}>
      <div  className="flex gap-2 ml-2 mt-4 hover:cursor-pointer">
        <BackWardIcon className="w-6 h-6" />
        <p className="text-base">Retour</p>
      </div>
    </Link>
  );
};

export default BackButton;
