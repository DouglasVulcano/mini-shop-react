import IndexPage from "./IndexPage";
import ProductPage from "./ProductPage";

const routes = [
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
];

export default routes;
