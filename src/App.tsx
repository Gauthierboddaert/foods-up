import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Test from "./features/recipe/components/test";

const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/dashboard" element={<Test />}/>
    )
  );

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={route} />
      </React.StrictMode>
    </>
  );
};

export default App;
