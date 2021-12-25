import React, { FunctionComponent } from "react";
import { IProduct } from "./Product";
import Rating from "./Rating";
import Image from "next/image";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import styles from "../styles/ProductInfo.module.css";
interface Product {
  productInfo: IProduct;
}
const ProductInfo: FunctionComponent<Product> = ({ productInfo }) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <Image
          layout="fill"
          objectFit="contain"
          src={productInfo.image}
          alt={productInfo.title}
          property="true"
        />
      </div>
      <div className={styles.productInfoDiv}>
        <h1>{productInfo.title}</h1>
        <h2>{productInfo.brand}</h2>
        <Rating rating={productInfo.rating} />
        <h4>{`Reviews: ${productInfo.reviewsNumber}`}</h4>
        <h4>{`Category: ${productInfo.category}`}</h4>
        <h4>{`Count in stock: ${productInfo.countInStock}`}</h4>
        <h5>{`Price: ${productInfo.price}$`}</h5>
        <p className={styles.productdescription}>{productInfo.description}</p>
        <div className={styles.buttonsDiv}>
          <Button variant="contained" size="small">
            Buy {productInfo.price}$
          </Button>
          <Button variant="contained" size="small">
            Add to cart <AddIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
