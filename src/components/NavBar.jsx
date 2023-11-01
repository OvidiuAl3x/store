import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenClothes from "./MenProducts/MenClothes";
import Layout from "./Layout";
import Home from "./Home";
import MenProducts from "./MenProducts";

const NavBar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/men-products" element={<MenProducts />} />
          <Route path="/men-clothes" element={<MenClothes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavBar;
