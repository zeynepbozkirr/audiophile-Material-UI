import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../../shared/productCard";
import styles from "./seeProducts.module.css";
import SingleProductCard from "../../shared/productCard/singleProductCard";
import { products } from "../../../data.json";
import { fetchProduct } from "../../../store/productSlice";

const SeeProduct = () => {
  return (
    <Grid container className={styles.product}>
      <Grid className={styles.productItemfirst}>
        <ProductCard
          color={"white"}
          name={products.values[4].name}
          description={products.values[4].description}
          id={products.values[4].id}
          photo={products.values[4].image}
          cardType={"seeProduct"}
        />
      </Grid>
      <Grid className={styles.productItemSecond}>
        <ProductCard
          name={products.values[5].name}
          id={products.values[5].id}
          photo={products.values[5].image}
          cardType={"seeProduct"}
        />
      </Grid>
      <Grid container className={styles.productItemThird}>
        <Grid xs={12} sm={12} md={5.8}>
          <SingleProductCard
            photoSize={500}
            id={products.values[6].id}
            photo={products.values[6].image}
            color={"#1E1E20"}
          />
        </Grid>
        <Grid xs={12} sm={12} md={5.8}>
          <SingleProductCard
            color={"#F5F5F7"}
            id={products.values[6].id}
            description={products.values[6].name}
            cardType={"seeProduct"}
          />
        </Grid>
      </Grid>

      <Grid className={styles.productItemFourth}>
        <ProductCard
          id={products.values[8].id}
          photo={products.values[8].image}
          name={products.values[8].name}
          description={products.values[8].description}
          photoSize={"100%"}
          position={"start"}
        />
      </Grid>
    </Grid>
  );
};

export default SeeProduct;
