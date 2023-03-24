import React, { useEffect, useState } from "react";
import { products } from "../../../data.json";
import { useRouter } from "next/router";
import styles from "./product.module.css";
import facebook from "../../../icons/facebook.svg";
import ProductCard from "../../shared/productCard";
import Image from "next/image";
import { Img } from "react-image";
import { fetchProduct } from "../../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const fetching = async (id) => {
    setLoading(true);
    const item = await products.values.filter((x) => x.id == id);
    setProduct(item);
  };
  const { productx } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(productx, "ppp");

  useEffect(() => {
    if (id) {
      fetching(id).then(() => setLoading(false));
      console.log(product);
      console.log(productx, "ppp");
    }
    // dispatch(fetchProduct(id));
  }, [id]);

  console.log();
  return product ? (
    <div className={styles.product}>
      <ProductCard
        photo={`../${product[0].image} `}
        photoSize={400}
        description={product[0].description}
        name={product[0].name}
        cardType={"addToCard"}
        buttonTitle={"add to card"}
        amount={4}
      />
    </div>
  ) : (
    loading
  );
};

export default Product;
