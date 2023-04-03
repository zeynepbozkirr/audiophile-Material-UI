import React from "react";
import styles from "./detailPhoto.module.css";
import { Grid } from "@mui/material";

const DetailPhoto = () => {
  return (
    <Grid container className={styles.detailPhoto}>
      <Grid md={6} className={styles.leftPhoto} container>
        <img src={"../detail1.png"} className={styles.img1} />
        <img src={"../detail2.png"} className={styles.img1} />
      </Grid>
      <Grid md={6} sm={12} className={styles.rightPhoto}>
        <img src={"../detail3.png"} className={styles.img2} />
      </Grid>
    </Grid>
  );
};

export default DetailPhoto;
