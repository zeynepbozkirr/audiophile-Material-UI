import React from "react";
import { products } from "../../../data.json";
import Grid from "@mui/material/Grid";
import styles from "./navbar.module.css";
import { ShoppingCartSvgrepoCom } from "../../icons";
import Link from "next/link";
import { Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className={styles.navbarDiv}>
      <Grid className={styles.navbar} container>
        <Grid md={4} sm={12}>
          <Link href={"/#"}>
            <Typography className={styles.logo}>audiophile</Typography>
          </Link>
        </Grid>

        <Grid md={4} sm={6} xs={12} className={styles.itemGrid}>
          {products.name.map((item, index) => {
            return (
              <Link key={index} href={"/#"}>
                <Typography className={styles.navbarItem}>{item}</Typography>
              </Link>
            );
          })}
        </Grid>

        <Grid md={4} sm={6} xs={12} className={styles.shoppingCard}>
          <Link href={"/pay"}>
            <ShoppingCartSvgrepoCom fill="white" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
