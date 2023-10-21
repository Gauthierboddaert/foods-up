import ContentLoader from "react-content-loader";

const CardCategoriesLoader = () => {
  return (
    <>
      <ContentLoader
        viewBox="0 0 400 60"
        className="mt-6 flex justify-center w-full h-14"
      >
        <rect x="0" y="0" rx="5" ry="5" width="120" height="48" />
        <rect x="140" y="0" rx="5" ry="5" width="120" height="48" />
        <rect x="280" y="0" rx="5" ry="5" width="120" height="48" />
      </ContentLoader>
      <div className="flex justify-center w-full">
        <hr className="border-1 border-solid border-foods-orange w-72 my-4" />
      </div>
    </>
  );
};

export default CardCategoriesLoader;
