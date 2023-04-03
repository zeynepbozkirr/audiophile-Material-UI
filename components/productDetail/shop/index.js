import React from "react";
import Grid from "@mui/material/Grid";
import styles from "../../home/shop/shop.module.css";
import ShopCard from "../../shared/shopCard";
import { products } from "../../../data.json";

const DetailShop = () => {
  return (
    <Grid className={styles.shop} container spacing={0}>
      {products.values.map((item, index) => {
        return (
          <Grid
            key={index}
            md={3.8}
            sm={12}
            xs={12}
            className={styles.shopCard}
          >
            {index < 3 && <ShopCard id={item.id} buttonTitle={"shop"} />}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DetailShop;
