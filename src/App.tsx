import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./features/header/components/Layout";
import routes from "./pages/Routes";

const App = () => {
  const route = createBrowserRouter(routes);

  return (
    <>
      <Layout />
      <RouterProvider future={{ v7_startTransition: true }} router={route} />
    </>
  );
};

export default App;
