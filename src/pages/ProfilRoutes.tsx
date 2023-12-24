import { Route } from "react-router-dom";
import Profil from "../features/profil/components/CardProfil";

const ProfilRoutes = [
   <Route path="/profil/:username" key={2} Component={Profil} />
]

export default ProfilRoutes;