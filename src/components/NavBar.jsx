import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenClothes from "./MenProducts/MenClothes";
import Layout from "./Layout";
import Home from "../pages/Home";
import MenProducts from "../pages/MenProducts";
import Favorites from "../pages/Favorites";
import Cart from "../pages/Cart";

const NavBar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/men-products" element={<MenProducts />} />
          <Route path="/men-clothes" element={<MenClothes />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavBar;
