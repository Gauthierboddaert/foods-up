import { useParams } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import NotFoundResource from "../../not-found/components/NotFoundResource";
import defaultImage from "../../../../public/assets/defaultImage.jpg";
import BackButton from "../../button/components/BackButton";
import { motion } from "framer-motion";
import CardSearchList from "../../search/components/CardSearchList";

const CardDetailCategory = () => {
  const { name } = useParams();
  const { data, isLoading, error } = useCategory(name);

  if (isLoading && data === undefined) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <NotFoundResource />;
  }

  console.log(data);

  return (
    <motion.div
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <BackButton className="w-6 h-6 ml-4 mt-4" />
      <div className="flex items-center mt-12 gap-6 flex-col">
        {data?.file.length !== 0 ? (
          <img
            className="rounded-full w-52 h-52 object-cover object-center border-[1px]"
            src={data?.file[0].imageName}
            alt=""
          />
        ) : (
          <img className="rounded-full w-52 h-52" src={defaultImage} alt="" />
        )}
        <h1 className="font-anton text-foods-orange tracking-wide text-2xl">
          {data?.name}
        </h1>
        <div className="flex justify-center w-full">
          <hr className="border-1 border-solid border-foods-orange w-3/4 my-4" />
        </div>
      </div>
      <CardSearchList placeholder="Rechercher une recette" type="category" categoryName={name} />
      {/* //todo infinite scroll for each recipe content current category */}
    </motion.div>
  );
};

export default CardDetailCategory;
