import React from "react";
import ProductCard from "../components/ProductCard";
import styles from "./ProductsPage.module.scss";
import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import { useAllProducts } from "@hooks/useProduct";

export default function ProductsPage() {
  const products = useSelector((state) => state.products.products);

  useAllProducts();

  return (
    <div>
      <div className={styles.product_grid}>
        {products.map((prod) => (
          <ProductCard
            key={`${prod.id}-${uuidv4()}`}
            id={prod.id}
            title={prod.title}
            description={prod.description}
            price={prod.price}
            image={prod.image}
          />
        ))}
      </div>
    </div>
  );
}
