import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "../styles/Shop.module.css";
import Head from "next/head";
import Nav from "./Nav";
import ProductsGrid from "./ProductsGrid";
import ProductInfo from "./ProductInfo";
import { IProduct } from "./Product";
import Footer from "./Footer";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Carousel } from "react-bootstrap";
import products from "../api/API";
import image1 from "../assets/images/beach.jpg";
import image2 from "../assets/images/room.jpg";
import image3 from "../assets/images/smart-watch.jpg";

const images: StaticImageData[] = [image1, image2, image3];
const theme = createTheme({
  palette: {
    primary: {
      light: "#e8f5e9",
      main: "#388e3c",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    secondary: {
      light: "#a5d6a7",
      main: "#43a047",
      dark: "#2e7d32",
      contrastText: "#000",
    },
  },
});
const Shop: FunctionComponent = () => {
  const [Products, setProducts] = useState<IProduct[]>(products.products);
  const [productClicked, setProductClicked] = useState<number | undefined>(
    undefined
  );
  const handleSearchChange = (e: any) => {
    setProducts(
      Products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  const handleSearchKeyPress = (e: any) => {
    if (e.keyCode === 8) setProducts(products.products);
  };

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div>
        <ThemeProvider theme={theme}>
          <Nav
            theme={theme}
            handleSearchChange={(e: any) => {
              handleSearchChange(e);
            }}
            handleSearchKeyPress={(e: any) => handleSearchKeyPress(e)}
            handleLogoClick={() => {
              setProductClicked(undefined);
            }}
          />
          {!productClicked ? (
            <>
              <Carousel className={styles.carousel}>
                {images.map((image) => (
                  <Carousel.Item
                    className={styles.carouselIetem}
                    interval={2000}
                    key={image.src}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        objectFit="cover"
                        layout="fill"
                        className="mt-3"
                        src={image}
                        alt="First slide"
                        priority
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>

              <ProductsGrid
                products={Products}
                showProduct={(i: number) => {
                  setProductClicked(i);
                }}
              />
            </>
          ) : (
            <ProductInfo productInfo={products.products[productClicked - 1]} />
          )}
          <Footer theme={theme} />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Shop;
