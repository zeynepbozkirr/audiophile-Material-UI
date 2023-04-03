import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./fetures.module.css";
const Features = () => {
  const features = {
    title: "FEATURES",
    contentFirst:
      "   The advanced Active Noise Cancellation with built-in equalizer allow you\n" +
      "      to experience your audio world on your terms. It lets you enjoy your audio\n" +
      "      in peace, but quickly interact with your surroundings when you need to.\n" +
      "      Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery\n" +
      "      life, the XxX99 Mark ll headphones gives you superior sound, cutting-edge\n" +
      "      technology, and a modern design aesthetic, Featuring a genuine leather\n" +
      "      head strap and premium earcups, these headphones deliver superior comfort\n" +
      "      for those who like to enjoy endless listening it includes intuitive\n" +
      "      controls designed for any situation. Whether you're taking a business call\n" +
      "      or just in your own personal space, the auto on/off and pause features\n" +
      "      ensure that you'll never miss a beat \n\n ",
    contentSecond:
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your " +
      "audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your " +
      "surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery " +
      "life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design" +
      " aesthetic.",
  };

  const inTheBox = {
    title: "IN THE BOX ",
    count: ["1X", "1x ", "2x ", "1x ", "1x "],
    content: [
      "Headphone Unit",
      "Replacement Earcups ",
      " User Manual ",
      "3.5mm 5m Audio Cable",
      " Travel Bag ",
    ],
  };

  return (
    <Grid className={styles.features} container>
      <Grid md={6}>
        <Typography className={styles.title}>{features.title} </Typography>
        <br />
        <Typography className={styles.content}>
          {features.contentFirst}
        </Typography>
        <br />
        <Typography className={styles.content}>
          {features.contentSecond}{" "}
        </Typography>
      </Grid>

      <Grid md={6} className={styles.boxGrid}>
        <Typography className={styles.title}>{inTheBox.title} </Typography>
        <br />

        <Grid className={styles.box}>
          <div>
            {inTheBox.count.map((item, index) => {
              return (
                <Typography key={index} className={styles.boxContentCount}>
                  {item}
                </Typography>
              );
            })}
          </div>
          <div>
            {inTheBox.content.map((item, index) => {
              return (
                <Typography key={index} className={styles.boxContentItem}>
                  {item}
                </Typography>
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Features;
