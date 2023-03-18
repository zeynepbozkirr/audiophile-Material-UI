import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./footer.module.css";
import Typography from "@mui/material/Typography";
import { products } from "../../../data.json";

import { Facebook, Instagram, Twitter } from "../../icons";
import Box from "@mui/material/Box";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      style={{
        background: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container className={styles.footer}>
        <Grid container className={styles.productsContainer}>
          <Grid md={6} sm={12} xs={12} className={styles.productsTitle}>
            <Typography className={styles.productsTypogTitle}>
              audiophile
            </Typography>
          </Grid>
          <Grid md={6} sm={12} xs={12} className={styles.productsName}>
            {products.name.map((item, index) => {
              return (
                <Link key={index} href={"/#"}>
                  <Typography>{item}</Typography>
                </Link>
              );
            })}
          </Grid>
        </Grid>

        <Grid container className={styles.productsContainer}>
          <Grid md={6} sm={12} xs={12} className={styles.descGrid}>
            <Typography className={styles.descTypog}>
              2030 yılında tamamen karbon nötr olma çabalarımızın bir parçası
              olarak, iPhon14 Pro ve iPhone 14 Pro Max,
            </Typography>
            <Typography className={styles.descTypog}>
              EarPods ile sunulmamaktadır.
            </Typography>
          </Grid>

          <Grid md={6} sm={12} xs={12} className={styles.socialMedia}>
            <Facebook style={{ background: "white", marginRight: "15px" }} />
            <Twitter
              fill="white"
              style={{ color: "white", marginRight: "15px" }}
            />
            <Instagram fill="white" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
