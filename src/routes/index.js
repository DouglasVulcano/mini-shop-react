import { createBrowserRouter } from "react-router-dom";
import CartPage from "../modules/cart/CartPage";

import productRoutes from "../modules/product/routes";
import NotFound from "modules/notFound/NotFoundPage";

const router = createBrowserRouter([
  ...productRoutes,
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
