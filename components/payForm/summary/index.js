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

  return (
    <Grid className={styles.summary}>
      <Card sx={{ maxWidth: 345 }} className={styles.card}>
        <Typography className={styles.cardTitle}>SUMMARY</Typography>
        {basketProduct
          ? basketProduct.map((a, index) => {
              return (
                <Grid key={index} className={styles.productGrid}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={a.image}
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                    <div>
                      <Typography className={styles.title}>{a.name}</Typography>
                      <Typography className={styles.price}>
                        $ {a.price}
                      </Typography>
                    </div>
                  </div>

                  <Typography className={styles.price}>x{a.count}</Typography>
                </Grid>
              );
            })
          : null}
        <Grid className={styles.payCard}>
          <Typography className={styles.total}>TOTAL</Typography>
          <Typography className={styles.pieceTypograpy}>
            $ {total == "0" ? 0 : total}
          </Typography>
        </Grid>
        <Grid className={styles.payCard}>
          <Typography className={styles.total}>SHIPPING</Typography>
          <Typography className={styles.pieceTypograpy}>
            $ {total == "0" ? 0 : "50"}
          </Typography>
        </Grid>
        <Grid className={styles.payCard}>
          <Typography className={styles.total}>VAT(INCLUDED)</Typography>
          <Typography className={styles.pieceTypograpy}>
            $ {total == "0" ? 0 : "1.079"}
          </Typography>
        </Grid>
        <Grid className={styles.payCardGarndTotal}>
          <Typography className={styles.total}>GRAND TOTAL</Typography>
          <Typography className={styles.pieceGrandTotal}>
            $ {total == 0 ? 0 : total + 1.079 + 0.5}
          </Typography>
        </Grid>

        <Grid className={styles.payCard}>
          <SeeProductButton
            buttonSize={"100%"}
            buttonFunc={() => console.log("gönderildi")}
            type={"pay"}
            buttonTitle={"CONTINUE & PAY"}
            backcolor={" #D97C49"}
          />
        </Grid>
      </Card>
    </Grid>
  );
};

export default Summary;
