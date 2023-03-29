import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import DoubleCard from "../../shared/productCard/doubleCard";
import styles from "./seeProducts.module.css";
import SinglePhotoProductCard from "../../shared/productCard/singlePhotoProductCard";
import { products } from "../../../data.json";
import FullCard from "../../shared/productCard/fullCard";
import SingleProductCard from "../../shared/productCard/singleProductCard";

const SeeProduct = () => {
  return (
    <Grid container className={styles.product}>
      <Grid className={styles.productItemfirst}>
        <DoubleCard
          color={"white"}
          backcolor={"#D97C49"}
          id={products.values[4].id}
        />
      </Grid>
      <Grid className={styles.productItemSecond}>
        <FullCard
          backcolor={"#1E1E20"}
          color={"black"}
          id={products.values[5].id}
          cardType={"seeProduct"}
        />
      </Grid>
      <Grid container className={styles.productItemThird}>
        <Grid xs={12} sm={12} md={5.8}>
          <SinglePhotoProductCard
            id={products.values[6].id}
            backcolor={"#1E1E20"}
          />
        </Grid>
        <Grid xs={12} sm={12} md={5.8}>
          <SingleProductCard
            color={"black"}
            backcolor={"#F5F5F7"}
            id={products.values[6].id}
          />
        </Grid>
      </Grid>

      <Grid className={styles.productItemFourth}>
        <DoubleCard id={products.values[8].id} position={"start"} />
      </Grid>
    </Grid>
  );
};

export default SeeProduct;
