import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import ProductDetail from "./pages/productDetails";
import Caps from "./pages/caps";
import Interiors from "./pages/interiors";
import Perfumes from "./pages/perfumes";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        path: "*",
        element: (
          <div className="pt-36 pb-20">
            <p className="text-center text-2xl">Page not found</p>
          </div>
        ),
      },
      { path: "/", element: <Home /> },
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/caps", element: <Caps /> },
      { path: "/interiors", element: <Interiors /> },
      { path: "/perfumes", element: <Perfumes /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
