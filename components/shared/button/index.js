import React from "react";
import { Button } from "@mui/material";
import styles from "./button.module.css";
import Link from "next/link";
import PieceButton from "../pieceButton";
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
          background: backcolor,
          color: color ? color : "white",
        }}
      >
        {buttonTitle ? buttonTitle : "PRODUCT"}
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
        {buttonTitle ? buttonTitle : " SEE PRODUCT"}
      </Button>
    </Link>
  );
};

export default OrangeButton;
