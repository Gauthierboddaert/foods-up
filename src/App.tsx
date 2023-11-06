import { BrowserRouter, Routes } from "react-router-dom";
import Layout from "./features/header/components/Layout";
import routes from "./pages/Routes";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const client = new QueryClient()
  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter future={{ v7_startTransition: true }} basename="/">
          <div className="flex flex-col md:flex-row">
            <Layout />
            <Routes>
              {routes.map((route: ReactNode) => {
                return route;
              })}
            </Routes>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
