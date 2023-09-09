import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Importe o ícone de carrinho
import styles from "./Navbar.module.scss"; // Importe os estilos
import { useSelector } from "react-redux";

const Navbar = () => {
  const selecteds = useSelector((state) => state.cart.selecteds);
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          Loja XYZ
        </Link>
      </div>

      <div className={styles.cartContainer}>
        <FaShoppingCart
          className={styles.cartIcon}
          onClick={() => navigate("/cart")}
        />
        {selecteds.length > 0 && (
          <span className={styles.cartCounter}>{selecteds.length}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
