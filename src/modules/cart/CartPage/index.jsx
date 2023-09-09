import React from "react";
import styles from "./CartPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeSelecteds } from "@features/cart/cartSlice";
import CartCard from "../components/CartCard";

export default function CartPage() {
  const selecteds = useSelector((state) => state.cart.selecteds);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.cart_grid}>
        {selecteds.length ? (
          selecteds.map((prod) => (
            <CartCard
              key={prod.id}
              {...prod}
              onRemove={(id) => dispatch(removeSelecteds(id))}
            />
          ))
        ) : (
          <div className={styles.cart_grid_no_data}>
            <h1>Nenhum produto selecionado</h1>
          </div>
        )}
      </div>
    </div>
  );
}
