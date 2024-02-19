import React from "react";
import clothes from "../assets/clothes.jpg";
import shoes from "../assets/Shoes.jpg";
import accessories from "../assets/accessories.jpg";
import watches from "../assets/watches.jpg";
import { Link } from "react-router-dom";

const style = {
  containerLinks:
    "border-2 border-primary rounded-xl duration-300 hover:translate-y-[-20px] shadow-lg",
};

const MenProducts = () => {
  const { containerLinks } = style;
  return (
    <div className="grid mx-2 md:grid-cols-2 md:m-auto w-fit gap-10 animate-opacity">
      <Link to="/men-clothes" className={containerLinks}>
        <img src={clothes} alt="clothes" className="p-2 rounded-xl" />
        <p className="text-center text-xl">Clothes</p>
      </Link>
      <Link to="/men-shoes" className={containerLinks}>
        <img src={shoes} alt="shoes" className="p-2 rounded-xl" />
        <p className="text-center text-xl">Shoes</p>
      </Link>
      <Link to="/men-accessories" className={containerLinks}>
        <img src={accessories} alt="accessories" className="p-2 rounded-xl" />
        <p className="text-center text-xl">Accessories</p>
      </Link>
      <Link to="/men-watches" className={containerLinks}>
        <img src={watches} alt="watches" className="p-2 rounded-xl" />
        <p className="text-center text-xl">Watches</p>
      </Link>
    </div>
  );
};

export default MenProducts;
