import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import styles from "./productCard.module.css";
import Button from "@mui/material/Button";
import SeeProductButton from "../button";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../store/productSlice";

const SingleProductCard = ({ backcolor, color, cardType, id }) => {
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
    <Grid
      container
      className={styles.singleProduct}
      style={{ backgroundColor: backcolor }}
    >
      <Grid md={6} sm={12} className={styles.singleText}>
        <div className={styles.textName}>{state[0].name}</div>
        <SeeProductButton
          border={"1px solid black"}
          color={color}
          cardType={cardType}
          id={id}
        />
      </Grid>
    </Grid>
  );
};

export default SingleProductCard;
