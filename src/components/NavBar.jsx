import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenClothes from "./MenProducts/MenClothes";
import Layout from "./Layout";
import Home from "./Home";
import MenProducts from "./MenProducts";
import Favorites from "./Favorites";

const NavBar = () => {
  const [favorite, setFavorite] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/men-products" element={<MenProducts />} />
          <Route
            path="/men-clothes"
            element={
              <MenClothes favorite={favorite} setFavorite={setFavorite} />
            }
          />
          <Route
            path="/favorite"
            element={
              <Favorites favorite={favorite} setFavorite={setFavorite} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavBar;
