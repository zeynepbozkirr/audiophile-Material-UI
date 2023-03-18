import React from "react";
import { products } from "../../../data.json";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./navbar.module.css";
import { ShoppingCartSvgrepoCom } from "../../icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{ background: "black", display: "flex", justifyContent: "center" }}
    >
      <Grid className={styles.navbar} container>
        <Grid md={2}>
          <Link href={"/#"}>
            <Box>audiophile</Box>
          </Link>
        </Grid>
        {products.name.map((item, index) => {
          return (
            <Link key={index} href={"/#"}>
              <Box>{item}</Box>
            </Link>
          );
        })}

        <Grid>
          <ShoppingCartSvgrepoCom fill="white" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
