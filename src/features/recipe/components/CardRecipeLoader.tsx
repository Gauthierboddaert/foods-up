import ContentLoader from "react-content-loader";

const CardRecipeLoader = () => {
  return (
    <div className="w-[400px]">
      <ContentLoader className="" viewBox="0 0 400 600">
        <circle cx="55" cy="31" r="18" />
        <rect x="90" y="30" rx="1" ry="1" width="200" height="13" />
        <rect x="35" y="55" rx="5" ry="5" width="330" height="350" />
        <rect x="35" y="415" rx="3" ry="3" width="250" height="10" />
        <rect x="35" y="435" rx="3" ry="3" width="150" height="10" />
      </ContentLoader>
    </div>
  );
};

export default CardRecipeLoader;
