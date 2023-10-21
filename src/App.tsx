import { BrowserRouter, Routes } from "react-router-dom";
import Layout from "./features/header/components/Layout";
import routes from "./pages/Routes";
import { ReactNode } from "react";

const App = () => {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }} basename="/">
        <Layout />
        <Routes>
          {routes.map((route: ReactNode) => {
            return route;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
