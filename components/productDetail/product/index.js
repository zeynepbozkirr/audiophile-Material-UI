import React, { useEffect, useState } from "react";
import { products } from "../../../data.json";
import { useRouter } from "next/router";
const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useState(0);

  const fetching = async (id) => {
    const item = products.values.findIndex((x) => x.id === id);
    setState(item);
  };

  useEffect(() => {
    fetching(id);
  });

  return <div>{state}</div>;
};

export default Product;
