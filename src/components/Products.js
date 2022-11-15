import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { ProductsApi } from "../service/ApiRequest";
import Header from "./Header";
import { ProductCard } from "./ProductCard";
import { Cart } from "./Cart";

export const useStyles = makeStyles(() => ({
  cartContainer: {
    display: "flex",
    justifyItems: "center",
    color:
      "linear-gradient(130deg, rgba(75,73,220,1) 1%, rgba(2,0,36,1) 53%, rgba(75,73,220,1) 100%)",
    width: "100%",
    marginTop: "30px!important",
    borderBottom: "7px solid black",
  },
  cartText: {
    fontSize: "30px!important",
    fontWeight: "600!important",
    marginLeft: "40px!important",
    marginRight: "auto!important",
  },
  cartCost: {
    fontSize: "20px!important",
    marginRight: "40px!important",
  },
}));

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

export const Products = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  useEffect(() => {
    (async () => {
      const data = await ProductsApi();
      setProducts(data.products);
    })();
  }, []);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.title === item.title);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = { ...product, quantity: 1 };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const renderProduts = () => (
    <>
      {products?.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          addToCart={addToCart}
          cart={cart}
        />
      ))}
    </>
  );

  const renderCart = () => (
    <>
      <Grid className={classes.cartContainer}>
        <Typography className={classes.cartText}>Cart</Typography>
        <Typography className={classes.cartCost}>
          Total Cost: $ {getTotalSum()}
        </Typography>
      </Grid>

      {cart?.map((item, id) => (
        <Cart key={id} product={item} setCart={setCart} cart={cart} />
      ))}
    </>
  );

  return (
    <>
      <Header
        setCart={setCart}
        cart={cart}
        products={products}
        PAGE_CART={PAGE_CART}
        setPage={setPage}
        PAGE_PRODUCTS={PAGE_PRODUCTS}
      />
      <Grid
        container
        xs={10}
        sm={11}
        md={12}
        lg={9}
        item
        style={{ margin: "auto" }}
      >
        {page === PAGE_PRODUCTS && renderProduts()}
      </Grid>
      <Grid
        container
        xs={10}
        sm={11}
        md={12}
        lg={12}
        item
        style={{ margin: "auto" }}
      >
        {page === PAGE_CART && renderCart()}
      </Grid>
    </>
  );
};
