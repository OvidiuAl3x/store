import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductsApi } from "../service/ApiRequest";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      const data = await ProductsApi();
      setProducts(data.products);
    })();
  }, []);

  return (
    <Grid container
      xs={10}
      sm={11}
      md={12}
      lg={9}
      item
      style={{ margin: "auto" }}
    >
      {products?.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </Grid>
  );
};
