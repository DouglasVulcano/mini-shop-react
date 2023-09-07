import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    counterProdcuts: (state) => state.length,
  },
});

export const { counterProdcuts } = productSlice.actions;

export default productSlice.reducer;
