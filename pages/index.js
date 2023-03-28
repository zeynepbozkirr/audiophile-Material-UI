import styles from "../styles/Home.module.css";
import ShopArea from "../components/home/shop";
import React from "react";
import PromationArea from "../components/home/promation";
import SeeProduct from "../components/home/seeProduct";

export default function Home() {
  return (
    <div>
      <div className={styles.home}>
        <PromationArea />
      </div>
      <div className={styles.shop}>
        <ShopArea />
      </div>
      <div className={styles.products}>
        <SeeProduct />
      </div>
    </div>
  );
}
