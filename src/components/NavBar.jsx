import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Layout from "./Layout";
import Home from "./Home";

const NavBar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route index element={<Products />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default NavBar;
