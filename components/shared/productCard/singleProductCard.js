import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import styles from "./productCard.module.css";
import Button from "@mui/material/Button";
import SeeProductButton from "../button";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../store/productSlice";

const SingleProductCard = ({
  photo,
  description,
  buttonTitle,
  color,
  cardType,
  id,
}) => {
  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(product, "ppp");

  const [state, setSate] = useState();

  useEffect(() => {
    dispatch(fetchProduct(id)).then((res) => setSate(res.payload));
  }, [id]);

  return (
    <Grid
      container
      className={styles.singleProduct}
      style={{ backgroundColor: color }}
    >
      {photo ? (
        <Grid md={6} sm={12} className={styles.singlePhoto}>
          <img src={photo} width="200" />
        </Grid>
      ) : (
        <Grid md={6} sm={12} className={styles.singleText}>
          <div className={styles.textName}>{description}</div>
          <SeeProductButton color={"#D97C49"} cardType={cardType} id={id} />
        </Grid>
      )}
    </Grid>
  );
};

export default SingleProductCard;
