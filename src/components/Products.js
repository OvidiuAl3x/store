import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { ProductsApi } from "../service/ApiRequest";
import Header from "./Header";
import { ProductCard } from "./ProductCard";
import { Cart } from "./Cart";
import { MiniCart } from "./MiniCart";

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
  miniCartContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  miniCart: {
    background:
      "linear-gradient(130deg, rgba(2,0,36,1) 10%, rgba(75,73,220,1) 80%, rgba(75,73,220,1) 100%)",
    color: "white",
    position: "absolute",
    zIndex: "3",
    borderRadius: "10px",
    right: "5px",
    border: "2px white",
    width: "100%",
    maxWidth: "350px",
  },
  miniCartText: {
    padding: "10px",
  },
  miniCartCostContainer: {
    display: "flex",
    alignItems: "center",
  },
  miniCartTotalProduct: {
    marginRight: "auto!important",
    marginLeft: "10px!important",
  },
  miniCartCost: {
    marginRight: "13px!important",
  },
}));

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

export const Products = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [isHovering, setIsHovering] = useState(false);

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

  const getTotalProduct = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const renderProduts = () => (
    <>
      {products?.map((item) => (
        <ProductCard key={item.id} product={item} addToCart={addToCart} />
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

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  return (
    <>
      <Header
        setCart={setCart}
        cart={cart}
        products={products}
        PAGE_CART={PAGE_CART}
        setPage={setPage}
        PAGE_PRODUCTS={PAGE_PRODUCTS}
        setIsHovering={setIsHovering}
        handleMouseOver={handleMouseOver}
      />
      {isHovering && (
        <Grid
          className={classes.miniCartContainer}
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
        >
          <Grid className={classes.miniCart}>
            {getTotalProduct() !== 0 ? (
              <>
                <Typography className={classes.miniCartText}>Cart</Typography>

                {cart?.map((item, id) => (
                  <MiniCart
                    key={id}
                    product={item}
                    setCart={setCart}
                    cart={cart}
                    handleMouseOut={handleMouseOut}
                  />
                ))}
                <Grid className={classes.miniCartCostContainer}>
                  <Typography className={classes.miniCartTotalProduct}>
                    Total: {getTotalProduct()}
                    {getTotalProduct() <= 1 ? <> Product</> : <> Products</>}
                  </Typography>
                  <Typography className={classes.miniCartCost}>
                    $ {getTotalSum()}
                  </Typography>
                </Grid>
              </>
            ) : (
              <Typography className={classes.miniCartText}>
                Your Cart is Empty
              </Typography>
            )}
          </Grid>
        </Grid>
      )}
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
