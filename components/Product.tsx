import React, { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import styles from "../styles/Product.module.css";
export interface IProduct {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  reviewsNumber: number;
  countInStock: number;
  rating: number;
  brand: string;
}
interface IProps {
  showProduct: (i: number) => void;
}
const Product: FunctionComponent<IProduct & IProps> = ({
  id,
  title,
  image,
  description,
  price,
  showProduct,
}) => {
  const Description = description.substring(0, 40);
  return (
    <Card className={styles.productCard} sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={image} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Description}
        </Typography>
      </CardContent>
      <CardActions className={styles.buttonsDiv}>
        <Button
          onClick={() => {
            showProduct(id);
          }}
          variant="contained"
          size="small"
        >
          Buy {price}$
        </Button>
        <Button variant="contained" size="small">
          Add to cart <AddIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
