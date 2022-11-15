import React from "react";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid, Typography } from "@mui/material";

export const useStyles = makeStyles(() => ({
  navBarContainer: {
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient(130deg, rgba(2,0,36,1) 10%, rgba(75,73,220,1) 80%, rgba(75,73,220,1) 100%)",
  },
  logo: {
    fontSize: "25px !important",
    marginLeft: "20px !important",
    cursor: "pointer",
    color: "white",
  },
  home: {
    marginRight: "auto !important",
    marginLeft: "100px !important",
    fontSize: "18px!important",
    fontWeight: "600!important",
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
  },
  cartContainer: {
    display: "flex !important",
    alignItems: "center !important",
    marginRight: "30px !important",
  },
  cart: {
    fontSize: "30px !important",
    cursor: "pointer !important",
    color: "white",
    textDecoration: "none",
  },
  cartItems: {
    position: "relative",
    right: "15px",
    top: "7px",
    borderRadius: "50%",
    background:
      "linear-gradient(130deg, rgba(75,73,220,1) 1%, rgba(2,0,36,1) 53%, rgba(75,73,220,1) 100%)",
    width: "22px",
    color: "white",
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

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
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
        {cart.length >= 1 ? (
          <Typography className={classes.cartItems}>
            {getCartTotal()}
          </Typography>
        ) : (
          <Typography className={classes.cartItems}></Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
