import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import styles from "./shopcard.module.css";
import { RightArrow } from "../../icons";

const ShopCard = ({ photo, description, buttonTitle }) => {
  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.image}
        sx={{ height: 140, width: 100 }}
        image={photo}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={styles.button}>
          <Typography> {buttonTitle}</Typography>
          <RightArrow className={styles.icon} fill="  #D97C49" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
