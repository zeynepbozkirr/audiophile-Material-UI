import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { products } from "../data.json";

const initialState = {
  basketProduct: [],
  basketProductTotal: 0,
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
  reducers: {
    addBasket: (state, action) => {
      const some = state.basketProduct.some((x) => x.id == action.payload.id);
      const item = products.values.find((x) => x.id == action.payload.id);
      const obj = Object.assign({}, item);
      const obj2 = Object.assign(obj, { count: action.payload.count });

      if (state.basketProduct && some) {
        const item = state.basketProduct.find((x) => x.id == action.payload.id);
        item.count += action.payload.count;
        state.basketProductTotal += obj2.count * obj2.price;
      } else {
        // convert array to object
        // count objesini obj objesi ile birleştirme
        state.basketProduct.push(obj2);
        console.log(state.basketProductTotal, "bas");
        state.basketProductTotal += obj2.count * obj2.price;
      }
    },
  },
  // zaman gerektiren işlemlerde extra reducer kullanmalıyız,burada öğrenmek için kullandım
  // extraReducers: (builder) => {
  //   builder.addCase(fetchProduct.pending, (state, action) => {
  //     state.product = action.payload;
  //   });
  // },
});
export const { addBasket } = productSlice.actions;
export default productSlice.reducer;
