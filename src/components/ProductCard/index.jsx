import React from "react";
import styles from "./ProductCard.module.scss";

import { FaCartPlus, FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Button from "../Button";

const iconsConf = {
  size: "14px",
  style: { marginRight: "5px", paddingTop: "2px" },
};

export default function ProductCard({ id, title, price, image, description }) {
  const navigate = useNavigate(),
    redirectAction = (id) => navigate(`/product/${id}`);

  return (
    <div className={styles.product_card}>
      <img className={styles.product_image} src={image} alt={title} />
      <div className={styles.product_details}>
        <h2 className={styles.product_title}>{title}</h2>
        <p className={styles.product_description}>{description}</p>
        <p className={styles.product_price}>R${parseFloat(price).toFixed(2)}</p>
      </div>

      <Button onClick={() => alert("oi")} bgColor="#f37121">
        <FaCartPlus {...iconsConf} />
        Adicionar ao carrinho
      </Button>
      <Button onClick={() => redirectAction(id)} bgColor="#707070">
        <FaEye {...iconsConf} />
        Ver produto
      </Button>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
