import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data.json";
import { log } from "next/dist/server/typescript/utils";

const initialState = {
  value: 4,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(state.value, action, "sss");
      if (state.value > 0) {
        state.value -= 1;
      }
      console.log(state.value, action.payload, "sss");

      const item = products.values.filter((x) => x.id == state.value);
      return console.log(item, "iii");
    },
    decrement: (state, action) => {
      console.log(action, "dec");
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    //   action:verdiğimiz değer
    //   incrementbyacount: action kadar artır
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
