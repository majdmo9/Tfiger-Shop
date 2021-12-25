import React, { FunctionComponent } from "react";
import Product, { IProduct } from "./Product";
import styles from "../styles/ProductsGrid.module.css";
interface IProps {
  products: IProduct[];
  showProduct: (i: number) => void;
}
const ProductsGrid: FunctionComponent<IProps> = ({ products, showProduct }) => {
  return (
    <div className={styles.productsGrid}>
      {products.map((el) => (
        <Product
          id={el.id}
          key={el.id}
          title={el.title}
          image={el.image}
          description={el.description}
          brand={el.brand}
          category={el.category}
          reviewsNumber={el.reviewsNumber}
          countInStock={el.countInStock}
          rating={el.rating}
          price={el.price}
          showProduct={() => {
            showProduct(el.id);
          }}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
