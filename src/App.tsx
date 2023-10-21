import { BrowserRouter, Routes } from "react-router-dom";
import Layout from "./features/header/components/Layout";
import routes from "./pages/Routes";
import { ReactNode } from "react";

const App = () => {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }} basename="/">
        <div className="flex flex-col md:flex-row">
        <Layout/>
        <Routes>
          {routes.map((route: ReactNode) => {
            return route;
          })}
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
