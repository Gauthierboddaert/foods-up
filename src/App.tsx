import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./features/header/components/Layout";
import routes from "./pages/Routes";

const App = () => {
  const route = createBrowserRouter(routes);

  return (
    <>
      <Layout/>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
