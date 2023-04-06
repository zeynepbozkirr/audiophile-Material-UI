import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./product.module.css";
import DoubleCard from "../shared/productCard/doubleCard";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../store/productSlice";
import Feauteres from "./feauteres";
import { Grid } from "@mui/material";
import DetailPhoto from "./detailPhoto";
import Also from "./also";
import DetailShop from "./shop";
import Bringing from "../shared/bringing";

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const basketProduct = useSelector((state) => state.product.basketProduct);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <Grid className={styles.product} container>
      <div className={styles.doubleCardGrid}>
        <DoubleCard
          width={"70%"}
          product={"NEW PRODUCT"}
          photoColor={"#F5F5F7"}
          backcolor={"#D97C49"}
          count={count}
          setCount={setCount}
          id={id}
          photoSize={100}
          type={"detail"}
          buttonTitle={"add to card"}
          buttonFunc={() => dispatch(addBasket({ id: id, count: count }))}
        />
      </div>
      <div>
        <Feauteres />
      </div>
      <div className={styles.photoGrid}>
        <DetailPhoto />
      </div>

      <div className={styles.alsoGrid}>
        <Also />
      </div>
      <div className={styles.detailShopGrid}>
        <DetailShop />
      </div>
      <Bringing />
    </Grid>
  );
};

export default Product;
