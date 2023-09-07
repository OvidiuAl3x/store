import React, { useEffect, useState } from "react";
import { GetData } from "../service/ApiRequest";
import { BiCircle, BiSolidCheckCircle } from "react-icons/bi";
import ProductsCards from "./ProductsCard";

const style = {
  button:
    "bg-primary uppercase text-white mt-2 px-4 py-2 hover:scale-105 duration-150 rounded-md",
  h1: "text-2xl md:text-4xl",
};

const Products = () => {
  const { h1 } = style;
  const [data, setData] = useState();
  const [discount, setDiscount] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await GetData();
      if (discount) {
        const newItem = data?.filter((item) => {
          return item.discount;
        });
        setData(newItem);
      } else {
        setData(data);
      }
    })();
  }, [discount]);

  const handleClick = () => {
    setDiscount(!discount);
  };

  const numberProducts = data?.length;

  return (
    <div className="max-w-[1240px] m-4 lg:mx-auto mt-[2em]">
      <div className="bg-white h-32 mb-2 p-5">
        <div className="flex items-end">
          <h1 className={h1}>Products</h1>
          <p className="text-xl ml-10">
            {numberProducts > 1 ? (
              <>
                {numberProducts} {numberProducts === 1 ? "product" : "products"}
              </>
            ) : (
              "0 products found"
            )}
          </p>
        </div>
        <hr />
        <div className="mt-3 flex items-center">
          <div
            className="flex items-center text-xl w-fit rounded-full px-2 py-1 cursor-pointer border-2 border-primary"
            onClick={handleClick}
          >
            {!discount ? <BiCircle /> : <BiSolidCheckCircle />}

            <p className="mr-1 ml-2 text-sm">Discount</p>
          </div>
          <div className="ml-4 border-2 border-primary rounded-full px-2 py-1 text-sm">
            <label for="products">Sort by: </label>
            <select name="products">
              <option value="featured">Featured</option>
              <option value="priceLow">Price: Low to High</option>
              <option value="priceHigh">Price: High to low</option>
              <option value="discountLow">Discount: Low to High</option>
              <option value="discountHigh">Discount: High to low</option>
            </select>
          </div>
        </div>
      </div>
      <ProductsCards data={data} />
    </div>
  );
};

export default Products;
