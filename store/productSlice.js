import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { products } from "../data.json";

const initialState = {
  product: [],
};
export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (productId) => {
    const item = await products.values.filter((x) => x.id == productId);
    return item;
  }
);
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  // zaman gerektiren işlemlerde extra reducer kullanmalıyız
  // extraReducers: (builder) => {
  //   builder.addCase(fetchProduct.pending, (state, action) => {
  //     state.product = action.payload;
  //   });
  // },
});

export default productSlice.reducer;
