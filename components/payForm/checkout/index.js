import React, { useState } from "react";
import styles from "./checkout.module.css";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const CheckOut = () => {
  const [checked, setChecked] = useState(true);

  const checkedControl = () => {
    setChecked(!checked);
  };

  return (
    <Grid className={styles.check} container>
      <Grid className={styles.checkoutGrid}>
        <Typography className={styles.checkoutText}> CHECKOUT</Typography>
      </Grid>
      <Grid className={styles.containergrid} container>
        <Grid xs={12} sm={12} md={12}>
          <Typography className={styles.title}>BILLING DETAILS</Typography>
        </Grid>
        <Grid xs={12} sm={12} md={6} className={styles.grid}>
          <Typography> Name </Typography>
          <TextField className={styles.textField} />
        </Grid>
        <Grid xs={12} sm={12} md={6} className={styles.grid}>
          <Typography> Email Adress </Typography>
          <TextField className={styles.textField} />
        </Grid>
        <Grid xs={12} sm={12} md={6} className={styles.grid}>
          <Typography> Phone Number </Typography>
          <TextField className={styles.textField} />
        </Grid>
      </Grid>

      <Grid className={styles.containergrid} container>
        <Grid xs={12} sm={12} md={12}>
          <Typography className={styles.title}> SHOPPING INFO</Typography>
        </Grid>
        <Grid xs={12} sm={12} md={12} className={styles.grid}>
          <Typography> Adress </Typography>
          <TextField className={styles.textField} />
        </Grid>
        <Grid xs={12} sm={12} md={6} className={styles.grid}>
          <Typography> ZP Code</Typography>
          <TextField className={styles.textField} variant="outlined" />
        </Grid>
        <Grid xs={12} sm={12} md={6} className={styles.grid}>
          <Typography> City </Typography>
          <TextField className={styles.textField} />
        </Grid>
        <Grid xs={12} sm={12} md={6} className={styles.grid}>
          <Typography> Country </Typography>
          <TextField className={styles.textField} />
        </Grid>
      </Grid>
      <Grid className={styles.containergrid} container>
        <Grid xs={12} sm={12} md={12}>
          <Typography className={styles.title}> PEYMENT DETAILS</Typography>
        </Grid>
        <Grid xs={12} sm={12} md={6} className={styles.grid}>
          <Typography> Peyment Method </Typography>
        </Grid>
        <Grid xs={12} sm={12} md={6} className={styles.grid}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              style={{
                border: `1px solid ${checked ? "#D97C49" : "#d3d3d3"}`,
                borderRadius: "10px",
                height: "60px",
              }}
              control={
                <Radio
                  checked={checked}
                  onChange={() => checkedControl()}
                  sx={{
                    "&": {
                      color: "#d3d3d3",
                    },
                    "&.Mui-checked": {
                      color: "#D97C49",
                    },
                  }}
                />
              }
              value="e-Money"
              label="e-Money"
            />
            <br />
            <FormControlLabel
              style={{
                border: `1px solid ${checked ? "#d3d3d3" : "#D97C49"}`,
                borderRadius: "10px",
                height: "60px",
              }}
              control={
                <Radio
                  onChange={() => checkedControl()}
                  sx={{
                    "&": {
                      color: "#d3d3d3",
                    },
                    "&.Mui-checked": {
                      color: "#D97C49",
                    },
                  }}
                />
              }
              value="Cash On Delivery"
              label="Cash On Delivery"
            />
          </RadioGroup>
        </Grid>
        <Grid xs={12} sm={12} md={6} className={styles.grid}>
          <Typography> e-Money Number </Typography>
          <TextField className={styles.textField} />
        </Grid>
        <Grid xs={12} sm={12} md={6} className={styles.grid}>
          <Typography> e-Money PIN </Typography>
          <TextField className={styles.textField} classes={styles.textField} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CheckOut;
