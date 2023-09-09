import { createBrowserRouter } from "react-router-dom";

import productRoutes from "modules/product/routes";
import cartRoutes from "modules/cart/routes";
import NotFound from "modules/notFound/NotFoundPage";

const router = createBrowserRouter([
  ...productRoutes,
  ...cartRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
