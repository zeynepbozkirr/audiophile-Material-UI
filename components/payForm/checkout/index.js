import React from "react";
import styles from "./checkout.module.css";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const CheckOut = () => {
  return (
    <Grid className={styles.check} container>
      <Grid className={styles.containergrid} container>
        <Grid xs={12} sm={12} md={12}>
          <Typography>BILLING DETAILS</Typography>
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
          <Typography> SHOPPING INFO</Typography>
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
          <Typography> PEYMENT DETAILS</Typography>
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
              control={<Radio />}
              value="e-Money"
              label="e-Money"
            />
            <FormControlLabel
              control={<Radio />}
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
          <TextField className={styles.textField} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CheckOut;
