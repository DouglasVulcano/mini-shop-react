import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ onClick, bgColor, children }) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
};

export default Button;
