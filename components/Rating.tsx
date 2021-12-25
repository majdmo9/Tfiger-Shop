import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
interface IProps {
  rating: number;
}
const BasicRating: FunctionComponent<IProps> = ({ rating }) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        display: "flex",
        justifyContent: "space-between",
        width: "20%",
      }}
    >
      <Rating name="half-rating-read" precision={0.5} value={rating} readOnly />
      <Typography sx={{ fontFamily: "-apple-system", fontSize: "1.4vw" }}>
        {rating}
      </Typography>
    </Box>
  );
};
export default BasicRating;
