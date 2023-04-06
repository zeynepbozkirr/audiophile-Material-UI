import React, { useState } from "react";
import styles from "./pieceButton.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../store/counterSlice";

const PieceButton = ({ count, setCount }) => {
  const increment = () => {
    setCount(count - 1);
  };
  const decrement = () => {
    setCount(count + 1);
  };
  return (
    <Grid className={styles.button}>
      <button className={styles.buttonDec} onClick={() => increment()}>
        <Typography className={styles.buttonDecTyp}>-</Typography>
      </button>
      <Button disabled={true} className={styles.buttonCount}>
        {count}
      </Button>
      <button className={styles.buttonInc} onClick={() => decrement()}>
        <Typography className={styles.buttonDecTypinc}>+</Typography>
      </button>
    </Grid>
  );
};

export default PieceButton;
