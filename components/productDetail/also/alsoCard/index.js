import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import styles from "./alsoCard.module.css";
import { fetchProduct } from "../../../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import OrangeButton from "../../../shared/button";

const AlsoCard = ({ photo, description, buttonTitle, id }) => {
  const dispatch = useDispatch();

  const [state, setSate] = useState();
  const [load, setLoad] = useState(true);
  useEffect(() => {
    dispatch(fetchProduct(id))
      .then((res) => setSate(res.payload))
      .then(() => setLoad(false));
  }, [id]);
  console.log(state, "sss");

  return load ? (
    "load"
  ) : (
    <Grid className={styles.card}>
      <div className={styles.cardMedia}>
        <img className={styles.image} src={`../${state[0].image}`} />
      </div>
      <Typography className={styles.title} component="div">
        {state[0].name}
      </Typography>
      <OrangeButton
        border={"none"}
        backcolor={"#D97C49"}
        id={id}
      ></OrangeButton>
    </Grid>
  );
};

export default AlsoCard;
