import { Route } from "react-router-dom";
import CardDetailCategory from "../features/category/components/CardDetailCategory";

const CategoryRoutes = [
   <Route path="/Category/:name" key={4} Component={CardDetailCategory} />
]

export default CategoryRoutes;