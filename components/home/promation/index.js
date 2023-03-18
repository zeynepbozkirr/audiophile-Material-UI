import React from "react";
import styles from "./promation.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { products } from "../../../data.json";
import { Button } from "@mui/material";
import SeeProduct from "../seeProduct";
import SeeProductButton from "../../shared/button";

const PromationArea = () => {
  return (
    <Grid className={styles.promation} container spacing={0}>
      <Grid md={6} className={styles.text}>
        <div className={styles.textName}>{products.name[1]}</div>
        <div className={styles.textDesc}>{products.values[0].description}</div>
        <SeeProductButton
          id={products.values[0].id}
          buttonTitle={"SEE PRODUCT"}
          color={"#D97C49"}
        ></SeeProductButton>
      </Grid>
      <Grid md={6}>
        <img src="img3.jpg" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
};

export default PromationArea;
