import { RouteObject } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";
import ProfilRoutes from "./ProfilRoutes";

const routes: RouteObject[] = [
  ...HomeRoutes,
  ...ProfilRoutes
]

export default routes;