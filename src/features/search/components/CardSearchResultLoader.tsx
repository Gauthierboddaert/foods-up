import ContentLoader from "react-content-loader";

interface CardSearchResultLoaderProps {
    className?: string;
}

const CardSearchResultLoader = ({ className }: CardSearchResultLoaderProps) => {
  return (
    <div className={`flex ${className} pt-12`} >
      <div className="max-w-screen-lg">
        {/* Set a maximum width */}
        <ContentLoader
          className="w-full"
          viewBox="0 0 100 70"
        >
          <rect
            x="15"
            y="0"
            rx="5"
            ry="5"
            width="70"
            height="50"
          />
          <rect x="15" y="53" rx="3" ry="4" width="60" height="5" />
          <rect x="15" y="60" rx="3" ry="4" width="60" height="5" />
        </ContentLoader>
        
      </div>
    </div>
  );
};

export default CardSearchResultLoader;
