import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styles from "../styles/Nav.module.css";
import { SvgIconTypeMap } from "@mui/material";
const drawerWidth = 50;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
interface IProps {
  theme: any;
}
const textArray: string[] = [
  "Send email",
  "Gift Cards",
  "Sign in",
  "Inbox",
  "Starred",
];
const iconsArray = [
  <MailIcon key={0} />,
  <CardGiftcardIcon key={1} />,
  <AssignmentIndIcon key={2} />,
  <InboxIcon key={3} />,
  <StarIcon key={4} />,
];
const PersistentDrawerLeft: React.FunctionComponent<IProps> = ({ theme }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.main,
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className={styles.drawerHeader}>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              color: theme.palette.primary.light,
            }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          {textArray.map((text, index) => (
            <div key={text}>
              <ListItem
                sx={{
                  color: theme.palette.primary.light,
                }}
                button
                key={text}
              >
                <ListItemIcon
                  sx={{
                    color: theme.palette.primary.light,
                  }}
                >
                  {iconsArray[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              <Divider key={index} />
            </div>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
export default PersistentDrawerLeft;
