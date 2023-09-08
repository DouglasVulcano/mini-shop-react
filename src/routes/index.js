import { createBrowserRouter } from "react-router-dom";
import CartPage from "../modules/cart/CartPage";

import productRoutes from "../modules/product/routes";

const router = createBrowserRouter([
  ...productRoutes,
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

export default router;
