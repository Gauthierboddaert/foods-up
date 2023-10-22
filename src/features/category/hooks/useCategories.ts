import { useEffect, useState } from "react";
import Category from "../type/Category";
import getCategories from "../api/getCategories";

const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        getCategories().then((category: Category[]) => {
            setCategories(category);
        })
    }, [])

    return categories;
}

export default useCategories;