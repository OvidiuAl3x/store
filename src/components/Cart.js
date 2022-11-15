import React from "react";
import { CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const useStyles = makeStyles(() => ({
  cartContainer: {
    display: "flex",
    width: "100%",
    background:
      "linear-gradient(0deg, rgba(2,0,36,1) 10%, rgba(75,73,220,1) 80%, rgba(75,73,220,1) 100%)",
  },

  removeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "40px",
    width: "10%",
  },

  removeProduct: {
    color: "#d94555",
    cursor: "pointer",
    "&:hover": {
      color: "#d94555",
    },
  },

  img: {
    maxWidth: "200px",
    margin: "50px 0px 50px 70px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    margin: "0px 100px!important",
    fontWeight: "650!important",
    width: "20%",
    textAlign: "center",
    color: "white",
  },

  quantityContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0px 50px!important",
    width: "20%",
    color: "white",
  },

  quantity: {
    margin: "0px 20px!important",
  },

  quantityIcon: {
    cursor: "pointer",
    border: "2px solid white",
    color: "white",
    borderRadius: "50%",
    background:
      "linear-gradient(130deg, rgba(75,73,220,1) 1%, rgba(2,0,36,1) 53%, rgba(75,73,220,1) 100%)",
  },

  price: {
    display: "flex",
    alignItems: "center",
    color: "white",
  },
}));

export const Cart = ({ product, cart, setCart }) => {
  const classes = useStyles();
  const { title, price, thumbnail, id } = product;

  const addQuantity = (product) => {
    const newCart = [...cart];
    newCart.find((item) => item.title === product.title).quantity++;
    setCart(newCart);
  };

  const removeQuantity = (product) => {
    const newCart = [...cart];
    newCart.find((item) => item.title === product.title).quantity--;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const productTotalPrice = price * product.quantity;

  return (
    <Grid container key={id}>
      <Grid className={classes.cartContainer}>
        <Grid className={classes.removeContainer}>
          <ClearIcon
            onClick={() => removeFromCart(product)}
            className={classes.removeProduct}
          />
        </Grid>

        <CardMedia
          component="img"
          height="130"
          image={thumbnail}
          alt={title}
          className={classes.img}
        />
        <Typography className={classes.title}>{title}</Typography>
        <Grid className={classes.quantityContainer}>
          <RemoveIcon
            className={classes.quantityIcon}
            onClick={() =>
              product.quantity > 1
                ? removeQuantity(product)
                : removeFromCart(product)
            }
          />
          <Typography className={classes.quantity}>
            {product.quantity}
          </Typography>
          <AddIcon
            className={classes.quantityIcon}
            onClick={() => addQuantity(product)}
          />
        </Grid>

        <Typography className={classes.price}>${productTotalPrice}</Typography>
      </Grid>
    </Grid>
  );
};
