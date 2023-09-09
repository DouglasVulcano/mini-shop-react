import React from "react";
import styles from "./MainLayout.module.scss";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
