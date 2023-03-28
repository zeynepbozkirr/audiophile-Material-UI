import React, { useState } from "react";
import styles from "./summary.module.css";
import Grid from "@mui/material/Grid";
import { Card, Typography, CardActions, Button } from "@mui/material";
import SeeProductButton from "../../shared/button";
import { useSelector } from "react-redux";
import { addBasket } from "../../../store/productSlice";
const Summary = () => {
  const basketProduct = useSelector((state) => state.product.basketProduct);
  const total = useSelector((state) => state.product.basketProductTotal);
  // const [total, setTotal] = useState(2);
  return (
    <Grid className={styles.summary}>
      <Card sx={{ maxWidth: 345 }} className={styles.card}>
        <Typography>SUMMARY</Typography>

        {basketProduct
          ? basketProduct.map((a, index) => {
              return (
                <Grid key={index} className={styles.productGrid}>
                  <img
                    src={a.image}
                    width={50}
                    height={50}
                    className={styles.image}
                  />
                  <div>
                    <Typography>{a.name}</Typography>
                    <Typography>{a.price}</Typography>
                  </div>

                  <Typography>x {a.count}</Typography>
                </Grid>
              );
            })
          : null}
        <Grid className={styles.payCard}>
          <Typography>TOTAL</Typography>
          <Typography className={styles.pieceTypograpy}>${total}</Typography>
        </Grid>
        <Grid className={styles.payCard}>
          <Typography>SHIPPING</Typography>
          <Typography className={styles.pieceTypograpy}>$ 50</Typography>
        </Grid>
        <Grid className={styles.payCard}>
          <Typography>VAT(INCLUDED)</Typography>
          <Typography className={styles.pieceTypograpy}>$1.079</Typography>
        </Grid>
        <Grid className={styles.payCardGarndTotal}>
          <Typography>GRAND TOTAL</Typography>
          <Typography className={styles.pieceGrandTotal}>
            $ {total + 1.079 + 0.5}
          </Typography>
        </Grid>

        <Grid className={styles.payCard}>
          <SeeProductButton
            buttonFunc={() => console.log("gönderildi")}
            type={"pay"}
            buttonTitle={"CONTINUE & PAY"}
            color={" #D97C49"}
          />
        </Grid>
      </Card>
    </Grid>
  );
};

export default Summary;
