import React from "react";
import styles from "./CartPage.module.scss";
import CartCard from "../components/CartCard";

import { useCart } from "@hooks/useCart";
import { useSelector } from "react-redux";

export default function CartPage() {
  const selecteds = useSelector((state) => state.cart.selecteds);

  const cart = useCart();

  return (
    <div>
      <div className={styles.cart_grid}>
        {selecteds.length ? (
          selecteds.map((prod) => (
            <CartCard
              key={prod.id}
              {...prod}
              onRemove={(id) => cart.removeFromCart(id)}
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
