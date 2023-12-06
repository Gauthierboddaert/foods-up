import { BrowserRouter, Routes } from "react-router-dom";
import Layout from "./features/header/components/Layout";
import routes from "./pages/Routes";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

const App = () => {

  const client = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
  });


  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
};

export default App;
