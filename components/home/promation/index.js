import React from "react";
import styles from "./promation.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { products } from "../../../data.json";
import { Button, Typography } from "@mui/material";
import SeeProduct from "../seeProduct";
import SeeProductButton from "../../shared/button";

const PromationArea = () => {
  return (
    <Grid className={styles.promation} container>
      <Grid md={6} className={styles.text}>
        <Typography className={styles.newProductText}>NEW PRODUCT</Typography>
        <div className={styles.textName}>{products.name[1]}</div>
        <div className={styles.textDesc}>{products.values[0].description}</div>
        <SeeProductButton
          id={products.values[0].id}
          buttonTitle={"SEE PRODUCT"}
          backcolor={"#D97C49"}
          color={"white"}
          cardType={"seeProduct"}
        />
      </Grid>
      <Grid md={6}>
        <img src="img3.jpg" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
};

export default PromationArea;
