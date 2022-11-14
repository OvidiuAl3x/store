import React from "react";
import {
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const useStyles = makeStyles(() => ({
  cartContainer: {
    display: "flex",
    width: "100%",
    borderBottom: "5px solid #48cfae",
  },

  removeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "40px",
    width: "10%",
  },

  removeProduct: {
    color: "#48cfae",
    cursor: "pointer",
    "&:hover": {
      color: "#FF1C1C",
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
    color: "#48cfae",
  },

  quantityContainer: {
    display: "flex",
    alignItems: "center",
    margin: "0px 50px!important",
    width: "20%",
    color: "#48cfae",
  },

  quantity: {
    margin: "0px 20px!important",
  },

  quantityIcon: {
    cursor: "pointer",
    border: "2px solid #48cfae",
    color: "#48cfae",
    borderRadius: "50%",
  },

  price: {
    display: "flex",
    alignItems: "center",
    color: "#48cfae",
  },
}));

export const Cart = ({ product, removeFromCart }) => {
  const classes = useStyles();
  const { title, price, thumbnail, id } = product;

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
          <RemoveIcon className={classes.quantityIcon} />
          <Typography className={classes.quantity}>Quantity</Typography>
          <AddIcon className={classes.quantityIcon} />
        </Grid>

        <Typography className={classes.price}>${price}</Typography>
      </Grid>
    </Grid>
  );
};
