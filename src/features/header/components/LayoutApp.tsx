import { Outlet } from "react-router-dom";
import Layout from "./Layout";

const LayoutApp = () => {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
};

export default LayoutApp;