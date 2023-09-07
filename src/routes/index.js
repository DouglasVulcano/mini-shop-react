import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import IndexPage from "../pages/IndexPage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

export default router;
