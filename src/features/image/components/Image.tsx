import defaultImage from '../../../../public/assets/defaultImage.jpg';
import File from '../../File/type/File';

interface ImageProps {
    src: File | undefined;
    alt: string | undefined;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const Image = ({src, alt, className, onMouseEnter}: ImageProps) => {

    if(undefined === src?.imageName) {
        return <img className={`${className}` } src={defaultImage} alt="defaultImage" />
    }

    return <img onMouseEnter={onMouseEnter} className={className} src={src.imageName} alt={alt} />
}

export default Image;