import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./productCard.module.css";
import Button from "@mui/material/Button";
import SeeProductButton from "../button";

const SingleProductCard = ({ photo, description, buttonTitle, color }) => {
  return (
    <Grid
      container
      className={styles.singleProduct}
      style={{ backgroundColor: color }}
    >
      {photo ? (
        <Grid md={6} sm={12} className={styles.singlePhoto}>
          <img src={photo} width="200" />
        </Grid>
      ) : (
        <Grid md={6} sm={12} className={styles.singleText}>
          <div className={styles.textName}>{description}</div>
          <SeeProductButton color={"#D97C49"} />
        </Grid>
      )}
    </Grid>
  );
};

export default SingleProductCard;
