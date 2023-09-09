import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    selecteds: [],
  },

  reducers: {
    setSelecteds: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.selecteds.find(
        (prod) => prod.id === product.id
      );

      if (existingProduct) {
        alert(
          "Identificamos que o produto já está no carrinho. A quantidade será atualizada."
        );
        existingProduct.quantity += parseInt(quantity);
      } else {
        state.selecteds.push({ ...product, quantity });
      }
    },
    removeSelecteds: (state, action) => {
      state.selecteds = state.selecteds.filter(
        (prod) => prod.id !== action.payload
      );
    },
  },
});

export const { setSelecteds, removeSelecteds } = cartSlice.actions;

export default cartSlice.reducer;
