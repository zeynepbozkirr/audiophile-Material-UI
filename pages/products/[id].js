import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { products } from "../../data.json";
const ProductDetail = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const router = useRouter();
  const { id } = router.query;
  console.log(id, "id");

  const state = [];

  const fetching = async (id) => {
    const item = await products.values.filter((x) => x.id === id);
    state.push(item);
  };
  useEffect(() => {
    fetching(id);
  }, [id]);

  console.log(state, "se");

  return <div>{state.name}</div>;
};

export default ProductDetail;
