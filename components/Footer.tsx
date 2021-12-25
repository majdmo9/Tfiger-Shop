import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "../styles/Footer.module.css";
import Typography from "@mui/material/Typography";
interface IProps {
  theme: any;
}
const Footer: FunctionComponent<IProps> = ({ theme }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <div className={styles.footerDiv}>
        <div className={styles.footerTextContainer}>
          <Typography
            className={styles.footerText}
            gutterBottom
            variant="h6"
            component="div"
          >
            Made with
          </Typography>
          <FavoriteIcon className={styles.footerIcon} />
          <Typography
            className={styles.footerText}
            gutterBottom
            variant="h6"
            component="div"
          >
            by Majd
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
