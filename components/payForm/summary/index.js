import React from "react";
import styles from "./summary.module.css";
import Grid from "@mui/material/Grid";
import { Card, Typography, CardActions, Button } from "@mui/material";
import SeeProductButton from "../../shared/button";
const Summary = () => {
  return (
    <Grid className={styles.summary}>
      <Card sx={{ maxWidth: 345 }} className={styles.card}>
        <Typography>SUMMARY</Typography>
        <Grid className={styles.productGrid}>
          <img
            src={"img5.jpg"}
            width={50}
            height={50}
            className={styles.image}
          />
          <div>
            <Typography>name</Typography>
            <Typography>piece</Typography>
          </div>

          <Typography>X1</Typography>
        </Grid>
        <Grid className={styles.productGrid}>
          <img
            src={"img3.jpg"}
            width={50}
            height={50}
            className={styles.image}
          />
          <div>
            <Typography>name</Typography>
            <Typography>piece</Typography>
          </div>

          <Typography>X1</Typography>
        </Grid>

        <Grid className={styles.payCard}>
          <Typography>TOTAL</Typography>
          <Typography className={styles.pieceTypograpy}>$40</Typography>
        </Grid>
        <Grid className={styles.payCard}>
          <Typography>SHIPPING</Typography>
          <Typography className={styles.pieceTypograpy}>$40</Typography>
        </Grid>
        <Grid className={styles.payCard}>
          <Typography>VAT(INCLUDED)</Typography>
          <Typography className={styles.pieceTypograpy}>$40</Typography>
        </Grid>
        <Grid className={styles.payCardGarndTotal}>
          <Typography>GRAND TOTAL</Typography>
          <Typography className={styles.pieceGrandTotal}>$40</Typography>
        </Grid>

        <Grid className={styles.payCard}>
          <SeeProductButton
            cardType={"pay"}
            buttonTitle={"CONTINUE & PAY"}
            color={" #D97C49"}
          />
        </Grid>
      </Card>
    </Grid>
  );
};

export default Summary;
