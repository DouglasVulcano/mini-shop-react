import MainLayout from "layouts/MainLayout";
import IndexPage from "./ProductsPage";
import ProductPage from "./ProductPage";

const routes = [
  {
    path: "/",
    element: (
      <MainLayout>
        <IndexPage />
      </MainLayout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <MainLayout>
        <ProductPage />
      </MainLayout>
    ),
  },
];

export default routes;
