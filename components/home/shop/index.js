import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./shop.module.css";
import { products } from "../../../data.json";
import ShopCard from "../../shared/shopCard";
import SeeProduct from "../seeProduct";

const ShopArea = () => {
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
            {index < 3 && (
              <ShopCard
                photo={item.image}
                description={item.name}
                buttonTitle={"shop"}
              />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ShopArea;
