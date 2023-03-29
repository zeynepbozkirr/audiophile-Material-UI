import React, { useEffect, useState } from "react";
import styles from "./productCard.module.css";
import Grid from "@mui/material/Grid";
import SeeProductButton from "../button";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../store/productSlice";
import PieceButton from "../pieceButton";

const DoubleCard = ({
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
          src={`../${state[0].image} `}
          width={photoSize ? photoSize : "200"}
        />
      </Grid>
      <Grid md={6} sm={12} className={styles.text} style={{ color: color }}>
        <div className={styles.textName}>{state[0].name}</div>
        <div className={styles.textDesc}>{state[0].description}</div>
        <div className={styles.orangeButton}>
          {type == "detail" ? (
            <PieceButton count={count} setCount={setCount} />
          ) : null}
          {disableButton ? null : (
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
        <div> </div>
      </Grid>
    </Grid>
  );
};

export default DoubleCard;
