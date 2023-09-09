import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa"; // Importe o ícone de erro
import styles from "./NotFound.module.scss"; // Importe os estilos

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <FaExclamationCircle className={styles.errorIcon} />
      <h1 className={styles.errorMessage}>Erro 404</h1>
      <p className={styles.errorDescription}>
        A página que você está procurando não foi encontrada.
      </p>
      <Link to="/" className={styles.backLink}>
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFound;
