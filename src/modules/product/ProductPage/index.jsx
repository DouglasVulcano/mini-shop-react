import React, { useEffect } from "react";
// import styles from "./ProductPage.module.scss";

import { setProduct } from "@features/products/productSlice";
import productService from "@services/ProductService";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function ProductPage() {
  const route = useLocation(),
    id = route.pathname.split("/")[2];

  const dispatch = useDispatch(),
    product = useSelector((state) => state.products.selectedProduct);

  useEffect(() => {
    async function fetchProduct(id) {
      const response = await productService.getById(id),
        { data } = response;
      dispatch(setProduct(data));
    }

    fetchProduct(id);
  }, [dispatch, route, id]);

  return (
    <div>
      <h1>Prod Page</h1>
      {product ? (
        <img src={product.image} alt={product.title} />
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
}
