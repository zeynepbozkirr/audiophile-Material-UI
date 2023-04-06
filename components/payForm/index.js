import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./payForm.module.css";
import Checkout from "./checkout";
import Summary from "./summary";
import BackButton from "../shared/backButton";
import { Typography } from "@mui/material";

const payForm = () => {
  return (
    <div className={styles.payForm}>
      <div className={styles.backButton}>
        <BackButton />
      </div>
      <Grid container className={styles.container}>
        <Grid md={8} sm={12} xs={12}>
          <Checkout />
        </Grid>
        <Grid md={3} sm={12} xs={12}>
          <Summary />
        </Grid>
      </Grid>
    </div>
  );
};

export default payForm;
