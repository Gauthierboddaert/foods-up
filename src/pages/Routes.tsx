import CategoryRoutes from "./CategoryRoutes";
import HomeRoutes from "./HomeRoutes";
import { LoginRoutes } from "./LoginRoutes";
import ProfilRoutes from "./ProfilRoutes";

const routes = [
  ...HomeRoutes,
  ...ProfilRoutes,
  ...LoginRoutes,
  ...CategoryRoutes,
]

export default routes;