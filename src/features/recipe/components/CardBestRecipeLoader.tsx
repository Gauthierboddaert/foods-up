import ContentLoader from "react-content-loader";

const CardBestRecipeLoading = () => {
  return (
    <div className="mt-16 mr-16 w-80 bg-white">
      <ContentLoader viewBox="0 0 350 500">
        <circle cx="30" cy="40" r="30" />
        <rect x="70" y="20" rx="3" ry="3" width="250" height="10" />
        <rect x="70" y="40" rx="3" ry="3" width="200" height="10" />
        <rect x="0" y="100" rx="3" ry="3" width="360" height="1" />
        <rect x="0" y="110" rx="3" ry="3" width="320" height="240" />
      </ContentLoader>
    </div>
  );
};

export default CardBestRecipeLoading;
