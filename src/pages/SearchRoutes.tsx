import { Route } from "react-router-dom";
import CardSearchList from "../features/search/components/CardSearchList";

const SearchRoutes = [
  <Route
    path="/search"
    key={5}
    element={<CardSearchList placeholder="Rechercher une recette" />}
  />,
];

export default SearchRoutes;
