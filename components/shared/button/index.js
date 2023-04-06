import React from "react";
import { Button, Typography } from "@mui/material";
import styles from "./button.module.css";
import Link from "next/link";
import Grid from "@mui/material/Grid";

const OrangeButton = ({
  border,
  buttonTitle,
  color,
  id,
  type,
  backcolor,
  count,
  buttonFunc,
}) => {
  return type === "detail" || type == "pay" ? (
    <Grid xs={24} sm={12} md={12} lg={12} className={styles.pieceButtonGridPay}>
      <Button
        disabled={count == 0 && type == "detail"}
        onClick={() => buttonFunc()}
        className={styles.buttonPay}
        style={{
          width: "160px",
          background: backcolor,
          color: color ? color : "white",
        }}
      >
        <Typography className={styles.buttonText}>
          {buttonTitle ? buttonTitle : "PRODUCT"}
        </Typography>
      </Button>
    </Grid>
  ) : (
    <Link href={`/products/${id}`}>
      <Button
        className={styles.button}
        style={{
          background: backcolor,
          color: color ? color : "white",
          border: border,
        }}
      >
        <Typography className={styles.buttonText}>
          {buttonTitle ? buttonTitle : " SEE PRODUCT"}
        </Typography>
      </Button>
    </Link>
  );
};

export default OrangeButton;
