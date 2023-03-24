import React from "react";
import Button from "@mui/material/Button";
import styles from "./backButton.module.css";
import { useRouter } from "next/router";
const BackButton = () => {
  const router = useRouter();

  return (
    <div className={styles.backButton}>
      <Button className={styles.button} onClick={() => router.back()}>
        Go Back
      </Button>
    </div>
  );
};

export default BackButton;
