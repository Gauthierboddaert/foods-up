import File from "../../File/type/File";

interface Category {
    id: number,
    name: string,
    image: string;
    file: File[]
}

export default Category;