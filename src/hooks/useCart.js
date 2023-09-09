// useAddToCart.js
import { useDispatch } from "react-redux";
import { removeSelecteds, setSelecteds } from "@features/cart/cartSlice";

export function useCart() {
  const dispatch = useDispatch();

  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("Selecione uma quantidade válida!");
      return;
    }

    dispatch(setSelecteds({ product, quantity }));
  };

  const removeFromCart = (productId) => dispatch(removeSelecteds(productId));

  return {
    addToCart,
    removeFromCart,
  };
}
