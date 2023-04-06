import React, { useEffect, useState } from "react";
import styles from "./productCard.module.css";
import Grid from "@mui/material/Grid";
import SeeProductButton from "../button";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../store/productSlice";
import PieceButton from "../pieceButton";
import { Typography } from "@mui/material";

const DoubleCard = ({
  md,
  width,
  product,
  direction,
  photoColor,
  disableButton,
  buttonTitle,
  color,
  id,
  position,
  type,
  buttonFunc,
  count,
  setCount,
  backcolor,
  photoSize,
}) => {
  const dispatch = useDispatch();
  const [state, setSate] = useState();
  const [load, setLoad] = useState(true);

  useEffect(() => {
    dispatch(fetchProduct(id))
      .then((res) => setSate(res.payload))
      .then(() => setLoad(false));
  }, [id]);
  const toString = <div style={{ color: "red" }}>BEST </div>;

  console.log(toString, "tt");
  return load ? (
    "load"
  ) : (
    <Grid container className={styles.product}>
      <Grid
        md={md ? md : 6}
        sm={12}
        xs={12}
        className={styles.photo}
        style={{
          background: photoColor,
          justifyContent: position ? position : "center",
        }}
      >
        <img
          style={{
            borderRadius: "10px",
          }}
          src={`../${state[0].image} `}
          width={photoSize ? photoSize : "200"}
        />
      </Grid>
      <Grid
        md={6}
        sm={12}
        xs={12}
        className={styles.text}
        style={{ color: color }}
        container
      >
        <Grid
          className={styles.textName}
          style={{ textAlign: direction ? direction : "start", width: width }}
        >
          <Typography className={styles.newProductText}>{product}</Typography>
          <Typography className={styles.titleText}>{state[0].name}</Typography>
        </Grid>
        <div className={styles.textDesc}>{state[0].description}</div>
        <div className={styles.textDesc}>
          {type == "detail" && (
            <Typography className={styles.priceText}>
              {`$`} {state[0].price}
            </Typography>
          )}
        </div>
        <Grid className={styles.orangeButton} container>
          {type == "detail" && (
            <PieceButton count={count} setCount={setCount} />
          )}

          <div>
            {!disableButton && (
              <SeeProductButton
                buttonFunc={buttonFunc}
                count={count}
                id={id}
                backcolor={backcolor}
                color={color}
                type={type}
                buttonTitle={buttonTitle}
              />
            )}
          </div>
        </Grid>
        <div> </div>
      </Grid>
    </Grid>
  );
};

export default DoubleCard;
