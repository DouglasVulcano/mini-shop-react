


import MainLayout from "layouts/MainLayout";
import CartPage from "modules/cart/CartPage";

const routes = [
  {
    path: "/cart",
    element: (
      <MainLayout>
        <CartPage />
      </MainLayout>
    ),
  },
];

export default routes;
