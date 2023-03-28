import React, { useEffect, useState } from "react";
import styles from "./productCard.module.css";
import Grid from "@mui/material/Grid";
import SeeProductButton from "../button";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../store/productSlice";
const FullCard = ({
  buttonTitle,
  color,
  id,
  photoSize,
  position,
  cardType,
  amount,
}) => {
  const dispatch = useDispatch();

  const [state, setSate] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(fetchProduct(id))
      .then((res) => setSate(res.payload))
      .then(() => setLoad(false));
  }, [id]);

  return load ? (
    "load"
  ) : (
    <Grid container className={styles.product}>
      <Grid
        md={6}
        sm={12}
        className={styles.photo}
        style={{
          justifyContent: position ? position : "center",
        }}
      >
        <img
          style={{
            borderRadius: "10px",
          }}
          src={state[0].image}
          width={photoSize ? photoSize : 200}
        />
      </Grid>
      <Grid md={6} sm={12} className={styles.text} style={{ color: color }}>
        <div className={styles.textName}>{state[0].name}</div>
        <SeeProductButton
          id={id}
          color={"#D97C49"}
          cardType={cardType}
          buttonTitle={buttonTitle}
          amount={amount}
        />
      </Grid>
    </Grid>
  );
};

export default FullCard;
