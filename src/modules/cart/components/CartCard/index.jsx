import React from "react";
import styles from "./CartCard.module.scss";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CartCard({
  id,
  title,
  price,
  image,
  description,
  quantity,
  onRemove,
}) {
  const navigate = useNavigate();

  const formatDescription = (description) => {
    return description.length > 100
      ? `${description.substring(0, 100)}...`
      : description;
  };

  return (
    <div
      className={styles.cart_card}
      onClick={() => navigate(`/product/${id}`)}
    >
      <button className={styles.remove_button} onClick={() => onRemove(id)}>
        X
      </button>
      <img className={styles.card_image} src={image} alt={title} />
      <div className={styles.card_details}>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_description}>
          {formatDescription(description)}
        </p>
        <p className={styles.card_price}>R${parseFloat(price).toFixed(2)}</p>
        <p className={styles.card_quantity}>Quantidade: {quantity}</p>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};
