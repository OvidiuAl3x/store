import React from "react";
import { CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";

export const useStyles = makeStyles(() => ({
  cartContainer: {
    display: "flex",
    width: "100%",
    borderBottom: " 2px solid black",
  },
  removeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 10px",
  },
  removeProduct: {
    color: "#d94555",
    cursor: "pointer",
    "&:hover": {
      color: "#d94555",
    },
  },

  imgContainer: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    maxWidth: "50px",
    marginRight: "10px",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    maxWidth: "150px",
    minWidth:"150px",
  },
  title: {
    color: "white",
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0px 20px 0px 0px",
    color: "white",
  },
  price: {
    display: "flex",
    alignItems: "center",
    color: "white",
    margin: "-30px",
  },
}));

export const MiniCart = ({ product, cart, setCart,handleMouseOut }) => {
  const classes = useStyles();
  const { title, price, thumbnail, id } = product;

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    // <Grid container key={id}>
    <Grid key={id} className={classes.cartContainer} onMouseOut={handleMouseOut}>
      <Grid className={classes.removeContainer}>
        <ClearIcon
          onClick={() => removeFromCart(product)}
          className={classes.removeProduct}
        />
      </Grid>
      <Grid className={classes.imgContainer}>
        <CardMedia
          component="img"
          height="50"
          image={thumbnail}
          alt={title}
          className={classes.img}
        />
        <Grid />
        <Grid className={classes.titleContainer}>
          <Typography className={classes.title}>{title}</Typography>
        </Grid>

        <Grid className={classes.quantityContainer}>
          <Typography className={classes.quantity}>
            x{product.quantity}
          </Typography>
        </Grid>
        <Typography className={classes.price}>${price}</Typography>
      </Grid>
    </Grid>
  );
};
