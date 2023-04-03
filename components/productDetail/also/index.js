import React from "react";
import { Grid, Typography } from "@mui/material";
import { products } from "../../../data.json";
import AlsoCard from "./alsoCard";
import styles from "./also.module.css";
const Also = () => {
  return (
    <Grid className={styles.also} container>
      <Typography className={styles.alsoTitle}> YOU MAY ALSO LIKE</Typography>
      <Grid container>
        {products.values.map((item, index) => {
          return (
            <Grid
              key={index}
              md={4}
              sm={12}
              xs={12}
              className={styles.alsoCard}
            >
              {index < 3 && <AlsoCard id={item.id} buttonTitle={"shop"} />}
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Also;
