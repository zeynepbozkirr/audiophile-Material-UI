import React from "react";
import styles from "./pieceButton.module.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../../store/counterSlice";

const PieceButton = ({ amount }) => {
  const count = useSelector((state) => state.counter.value);
  const selectorName = useSelector((state) => state.counter.name);
  const dispatch = useDispatch();

  return (
    <Grid className={styles.button}>
      <Button
        className={styles.buttonDec}
        onClick={() => dispatch(increment())}
      >
        -
      </Button>
      <Button disabled={true} className={styles.buttonDec}>
        {count}
      </Button>
      <Button
        className={styles.buttonDec}
        onClick={() => dispatch(decrement())}
      >
        +
      </Button>
    </Grid>
  );
};

export default PieceButton;
