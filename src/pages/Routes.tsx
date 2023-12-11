import CategoryRoutes from "./CategoryRoutes";
import HomeRoutes from "./HomeRoutes";
import { LoginRoutes } from "./LoginRoutes";
import ProfilRoutes from "./ProfilRoutes";
import SearchRoutes from "./SearchRoutes";

const routes = [
  ...HomeRoutes,
  ...ProfilRoutes,
  ...LoginRoutes,
  ...CategoryRoutes,
  ...SearchRoutes
]

export default routes;