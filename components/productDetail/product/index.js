import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./product.module.css";
import DoubleCard from "../../shared/productCard/doubleCard";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../../store/productSlice";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const basketProduct = useSelector((state) => state.product.basketProduct);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <div className={styles.product}>
      <DoubleCard
        backcolor={"#D97C49"}
        count={count}
        setCount={setCount}
        id={id}
        photoSize={200}
        type={"detail"}
        buttonTitle={"add to card"}
        buttonFunc={() => dispatch(addBasket({ id: id, count: count }))}
      />
    </div>
  );
};

export default Product;
