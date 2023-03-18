import React from "react";
import { Button } from "@mui/material";
import styles from "./button.module.css";
import Link from "next/link";

const SeeProductButton = ({ buttonTitle, color, id }) => {
  return (
    <Link href={`/products/${id}`}>
      <Button className={styles.button} style={{ background: color }}>
        {buttonTitle ? buttonTitle : " SEE PRODUCT"}
      </Button>
    </Link>
  );
};

export default SeeProductButton;
