import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import styles from "./productCard.module.css";
import Button from "@mui/material/Button";
import SeeProductButton from "../button";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../store/productSlice";

const SinglePhotoProductCard = ({ color, cardType, id }) => {
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
      style={{ backgroundColor: color }}
    >
      <Grid md={6} sm={12} className={styles.singlePhoto}>
        <img src={state[0].image} width="200" />
      </Grid>
    </Grid>
  );
};

export default SinglePhotoProductCard;
