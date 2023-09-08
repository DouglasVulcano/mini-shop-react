import React from "react";
import styles from "./ProductCard.module.scss";
import Button from "@components/Button";

import { FaCartPlus, FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const iconsConf = {
  size: "14px",
  style: { marginRight: "5px", paddingTop: "2px" },
};

export default function ProductCard({ id, title, price, image, description }) {
  const navigate = useNavigate();

  const formatDescription = (description) => {
    return description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  };

  return (
    <div className={styles.product_card}>
      <img className={styles.product_image} src={image} alt={title} />
      <div className={styles.product_details}>
        <h2 className={styles.product_title}>{title}</h2>
        <p className={styles.product_description}>
          {formatDescription(description)}
        </p>
        <p className={styles.product_price}>R${parseFloat(price).toFixed(2)}</p>
      </div>

      <Button onClick={() => alert("oi")} bgColor="#f37121">
        <FaCartPlus {...iconsConf} />
        Adicionar ao carrinho
      </Button>
      <Button onClick={() => navigate(`/product/${id}`)} bgColor="#707070">
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
