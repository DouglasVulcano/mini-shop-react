import React from "react";
import styles from "./Button.module.scss";
import {
  increment,
  decrement,
  clearCounter,
} from "../../store/slices/counterSlice";
import { useDispatch } from "react-redux";

export default function Button({ title, actionType }) {
  const dispatch = useDispatch();

  const handleClick = (type) => {
    switch (type) {
      case "add":
        dispatch(increment());
        break;
      case "remove":
        dispatch(decrement());
        break;
      case "clear":
        dispatch(clearCounter());
        break;
      default:
        break;
    }
  };

  return (
    <button className={styles.btn} onClick={() => handleClick(actionType)}>
      {title}
    </button>
  );
}
