import React from "react";
import { Button } from "@mui/material";
import styles from "./button.module.css";
import Link from "next/link";
import PieceButton from "../pieceButton";
import Grid from "@mui/material/Grid";

const SeeProductButton = ({ buttonTitle, color, id, cardType, amount }) => {
  return cardType === "seeProduct" ? (
    <Link href={`/products/${id}`}>
      <Button className={styles.button} style={{ background: color }}>
        {buttonTitle ? buttonTitle : " SEE PRODUCT"}
      </Button>
    </Link>
  ) : cardType === "addToCard" ? (
    <Grid container className={styles.pieceButtonGrid}>
      <Grid xs={24} sm={12} md={12} lg={5}>
        <PieceButton />
      </Grid>
      <Grid xs={24} sm={12} md={12} lg={6} className={styles.pieceButtonGrid}>
        <Button className={styles.button} style={{ background: color }}>
          {buttonTitle ? buttonTitle : "PRODUCT"}
        </Button>
      </Grid>
    </Grid>
  ) : cardType === "pay" ? (
    <Grid xs={24} sm={12} md={12} lg={12} className={styles.pieceButtonGridPay}>
      <Button className={styles.buttonPay} style={{ background: color }}>
        {buttonTitle ? buttonTitle : "PRODUCT"}
      </Button>
    </Grid>
  ) : null;
};

export default SeeProductButton;
