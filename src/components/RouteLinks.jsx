import React from "react";
import { Route, Routes } from "react-router-dom";
import MenClothes from "./MenProducts/MenClothes";
import Home from "../pages/Home";
import MenProducts from "../pages/MenProducts";
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";

const RouteLinks = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route index element={<Home />} />
      <Route path="/men-products" element={<MenProducts />} />
      <Route path="/men-clothes" element={<MenClothes />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/cart" element={<Cart />}></Route>
      {/* </Route> */}
    </Routes>
  );
};

export default RouteLinks;
