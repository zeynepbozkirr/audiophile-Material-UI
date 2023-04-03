import React from "react";
import Product from "../../components/productDetail";
import styles from "./productsDetail.module.css";
import BackButton from "../../components/shared/backButton";

const ProductDetail = () => {
  return (
    <div className={styles.productDetail}>
      <div className={styles.backButton}>
        <BackButton />
      </div>
      <div className={styles.product}>
        <Product />
      </div>
    </div>
  );
};

export default ProductDetail;
