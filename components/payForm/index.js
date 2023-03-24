import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./payForm.module.css";
import Checkout from "./checkout";
import Summary from "./summary";
import BackButton from "../shared/backButton";

const payForm = () => {
  return (
    <div className={styles.payForm}>
      <div className={styles.backButton}>
        <BackButton />
      </div>
      <Grid container className={styles.container}>
        <Grid md={8}>
          <Checkout />
        </Grid>
        <Grid md={3}>
          <Summary />
        </Grid>
      </Grid>
    </div>
  );
};

export default payForm;
