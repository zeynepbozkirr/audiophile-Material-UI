import React from "react";
import Grid from "@mui/material/Grid";
import DoubleCard from "../../shared/productCard/doubleCard";
import styles from "./bringing.module.css";
import { products } from "../../../data.json";

const Bringing = () => {
  return (
    <Grid className={styles.bringing}>
      <DoubleCard
        width={"70%"}
        direction={"end"}
        photoSize={"100%"}
        disableButton={true}
        id={products.values[8].id}
        position={"start"}
      />
    </Grid>
  );
};

export default Bringing;
