import React from "react";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid, Typography } from "@mui/material";

export const useStyles = makeStyles(() => ({
  navBarContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#48cfae",
  },
  logo: {
    fontSize: "25px !important",
    marginLeft: "20px !important",
    cursor: "pointer",
  },
  home: {
    marginRight: "auto !important",
    marginLeft: "100px !important",
    fontSize: "18px!important",
    fontWeight:"600!important",
    cursor: "pointer",
    textDecoration: "none",
    color: "#0e0e10",
  },
  cartContainer: {
    display: "flex !important",
    alignItems: "center !important",
    marginRight: "30px !important",
  },
  cart: {
    fontSize: "30px !important",
    cursor: "pointer !important",
    color: "#0e0e10",
    textDecoration: "none",
  },
  cartItems: {
    position: "relative",
    right: "15px",
    top: "7px",
    border: "1px solid #48cfae",
    borderRadius: "50%",
    backgroundColor: "#0e0e10",
    width: "22px",
    color: "#48cfae",
    textAlign: "center",
    cursor: "pointer",
  },
  cartLink: {
    textDecoration: "none!important",
  },
}));
const Header = ({ cart, PAGE_CART, setPage, PAGE_PRODUCTS }) => {
  const classes = useStyles();

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <Grid className={classes.navBarContainer}>
      <Typography className={classes.logo}>LOGO</Typography>

      <Typography
        className={classes.home}
        onClick={() => navigateTo(PAGE_PRODUCTS)}
      >
        Store
      </Typography>

      <Grid
        className={classes.cartContainer}
        onClick={() => navigateTo(PAGE_CART)}
      >
        <ShoppingCartIcon className={classes.cart} />
        <Typography className={classes.cartItems}>{cart.length}</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
