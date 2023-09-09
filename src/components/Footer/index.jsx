import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importe os ícones do React Icons
import styles from "./Footer.module.scss"; // Importe os estilos

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Sobre Nós</h3>
          <p>Conheça mais sobre a Loja XYZ e nossa missão.</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Contato</h3>
          <p>Email: contato@lojaxyz.com</p>
          <p>Telefone: (123) 456-7890</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Redes Sociais</h3>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://www.google.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com.br"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2023 Loja XYZ. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
