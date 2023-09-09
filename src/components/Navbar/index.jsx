import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Importe o ícone de carrinho
import styles from "./Navbar.module.scss"; // Importe os estilos

const Navbar = () => {
  const counter = 0;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          Loja XYZ
        </Link>
      </div>

      <div className={styles.cartContainer}>
        <FaShoppingCart className={styles.cartIcon} />
        {counter > 0 && <span className={styles.cartCounter}>{counter}</span>}
      </div>
    </nav>
  );
};

export default Navbar;
