import { RouteObject } from "react-router-dom";
import Home from "../features/home/components/Home";

const HomeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home/>
  }
]

export default HomeRoutes;