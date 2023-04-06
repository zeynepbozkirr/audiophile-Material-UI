import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./footer.module.css";
import Typography from "@mui/material/Typography";
import { products } from "../../../data.json";
import { Facebook, Instagram, Twitter } from "../../icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      style={{
        background: "black",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid className={styles.lineGrid}>
        <div className={styles.line}></div>
      </Grid>
      <Grid container className={styles.footer}>
        <Grid container className={styles.productsContainer}>
          <Grid md={6} sm={12} xs={12} className={styles.productsTitle}>
            <Typography>audiophile</Typography>
          </Grid>
          <Grid md={4} sm={6} xs={12} className={styles.productsName}>
            {products.name.map((item, index) => {
              return (
                <Link key={index} href={"/#"}>
                  <Typography className={styles.productsNameItem}>
                    {item}
                  </Typography>
                </Link>
              );
            })}
          </Grid>
        </Grid>

        <Grid container className={styles.productsContainer}>
          <Grid md={6} sm={12} xs={12} className={styles.descGrid}>
            <Typography className={styles.descTypog}>
              Audiophile is an all in one stop to fulfill your audio needs. We
              {"'"}re a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - {"'"} open 7 days a week.
            </Typography>
            <Typography className={styles.descTypog2}>
              Copyright 2021.All right reserved
            </Typography>
          </Grid>

          <Grid md={6} sm={12} xs={12} className={styles.socialMedia}>
            <Facebook style={{ background: "white", marginRight: "15px" }} />
            <Twitter
              fill="white"
              style={{ color: "white", marginRight: "12px" }}
            />
            <Instagram fill="white" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
