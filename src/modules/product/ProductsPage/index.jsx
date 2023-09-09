import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import styles from "./ProductsPage.module.scss";
import { v4 as uuidv4 } from "uuid";

import productService from "@services/ProductService";
import { setProducts } from "@features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductsPage() {
  const dispatch = useDispatch(),
    products = useSelector((state) => state.products.products);

  useEffect(() => {
    async function fetchProducts() {
      const response = await productService.get(),
        { data } = response;
      dispatch(setProducts(data));
    }

    fetchProducts();
  }, [dispatch]);

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
