import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import productService from "@services/ProductService";
import { setProduct, setProducts } from "@features/products/productSlice";

/**
 * Hook para buscar um produto pelo id
 * @param {*} productId
 */
export function useProductById(productId) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct(id) {
      const response = await productService.getById(id);
      const { data } = response;

      if (!data) {
        navigate("/404");
        return;
      }

      dispatch(setProduct(data));
    }

    fetchProduct(productId);
  }, [dispatch, navigate, productId]);
}

/**
 * Hook para buscar todos os produtos
 */
export function useAllProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await productService.get();
      const { data } = response;

      dispatch(setProducts(data));
    };

    fetchProducts();
  }, [dispatch]);
}
