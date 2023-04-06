import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import styles from "./shopcard.module.css";
import { RightArrow } from "../../icons";
import { fetchProduct } from "../../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ShopCard = ({ buttonTitle, id }) => {
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
    <Card className={styles.card}>
      <CardMedia
        className={styles.image}
        sx={{ height: 140, width: 140 }}
        image={`../${state[0].image}`}
        title="green iguana"
      />
      <Typography className={styles.title} gutterBottom component="div">
        {state[0].name}
      </Typography>
      <Button className={styles.button}>
        <Typography className={styles.buttontext}> {buttonTitle}</Typography>
        <RightArrow className={styles.icon} fill="#D97C49" />
      </Button>
    </Card>
  );
};

export default ShopCard;
