import { Route } from "react-router-dom";
import Test from "../features/recipe/components/test";
import Gauthier from "../features/recipe/components/Gauthier";

const HomeLayout = (): React.ReactNode => {
  return (
    <>
      <Route path="/" element={<Test />}></Route>
      <Route path="/dashboard" element={<Gauthier />}></Route>
    </>
  );
};

export default HomeLayout;
