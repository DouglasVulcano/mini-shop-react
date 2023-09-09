import React, { useEffect } from "react";
import styles from "./ProductPage.module.scss";

import { setProduct } from "@features/products/productSlice";
import productService from "@services/ProductService";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Button from "@components/Button";
import { FaCartPlus, FaMoneyBills } from "react-icons/fa6";

const iconsConf = {
  size: "14px",
  style: { marginRight: "5px", paddingTop: "2px" },
};

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
    product && (
      <div className={styles.productDetail}>
        <div className={styles.productImage}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.productInfo}>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>
            R${parseFloat(product.price).toFixed(2)}
          </p>
        </div>
        <div className={styles.productAdditionalInfo}>
          <div className={styles.additionalInfoItem}>
            <strong>Frete Grátis</strong>
            <span>para todo o Brasil</span>
          </div>
          <div className={styles.additionalInfoItem}>
            <strong>Vendedor Fictício</strong>
            <span>Loja XYZ</span>
          </div>
          <div className={styles.additionalInfoItem}>
            <strong>Devolução Grátis</strong>
            <span>em até 30 dias</span>
          </div>
          <div className={styles.additionalInfoItem}>
            <strong>Compra Garantida</strong>
            <span>
              receba o produto que está esperando ou devolvemos o dinheiro.
            </span>
          </div>
          <Button
            bgColor="#f37121"
            onClick={() => alert("Compra efetuada com sucesso!")}
          >
            <FaMoneyBills {...iconsConf} />
            Comprar agora
          </Button>
          <Button bgColor="#707070">
            <FaCartPlus {...iconsConf} />
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    )
  );
}
