import { RouteObject } from "react-router-dom";
import Profil from "../features/profil/components/Profil";

const ProfilRoutes: RouteObject[] = [
    {
        path: '/profil',
        element: <Profil/>
    }
]

export default ProfilRoutes;