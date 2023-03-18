import React from "react";
import styles from "./productCard.module.css";
import Grid from "@mui/material/Grid";
import SeeProductButton from "../button";

const ProductCard = ({
  photo,
  description,
  buttonTitle,
  size,
  color,
  name,
  id,
  photoSize,
  position,
}) => {
  return (
    <Grid container className={styles.product}>
      <Grid
        md={6}
        sm={12}
        className={styles.photo}
        style={{
          justifyContent: position ? position : "center",
        }}
      >
        <img
          style={{
            borderRadius: "10px",
          }}
          src={photo}
          width={photoSize ? photoSize : 200}
        />
      </Grid>
      <Grid md={6} sm={12} className={styles.text} style={{ color: color }}>
        <div className={styles.textName}>{name}</div>
        <div className={styles.textDesc}>{description}</div>
        <SeeProductButton id={id} color={"#D97C49"} />
      </Grid>
    </Grid>
  );
};

export default ProductCard;
