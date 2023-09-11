import React, { useEffect, useState } from "react";
import { GetData } from "../service/ApiRequest";

import ProductsCards from "./ProductsCard";
import LeftBar from "./LeftBar";

const style = {
  button:
    "bg-primary uppercase text-white mt-2 px-4 py-2 hover:scale-105 duration-150 rounded-md",
  h1: "text-2xl md:text-4xl",
};

const Products = () => {
  const { h1 } = style;
  const [data, setData] = useState();
  const [filterTags, setFilterTags] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await GetData();
      setData(data);
    })();
  }, []);

  const filteredData = data?.filter(
    (item) =>
      filterTags.length === 0 || filterTags.includes(item.type.toLowerCase())
  );

  const handleSort = async (e) => {
    let value = e.target.value;
    let asc;
    if (value === "priceLow") {
      const data = await GetData((value = "price"), (asc = "asc"));
      setData(data);
    } else if (value === "priceHigh") {
      const data = await GetData((value = "price"), (asc = "desc"));
      setData(data);
    } else if (value === "discount") {
      const data = await GetData((value = "discount"), (asc = "desc"));
      const newItem = data?.filter((item) => {
        return item.discount;
      });
      setData(newItem);
    } else {
      const data = await GetData(value);
      setData(data);
    }
  };

  const numberProducts = data?.length;

  return (
    <div>
      <LeftBar
        filterTags={filterTags}
        setFilterTags={setFilterTags}
      />
      <div className="max-w-[1240px] m-4 lg:mx-auto mt-[2em]">
        <div className="bg-white h-32 mb-2 p-5">
          <div className="flex items-end">
            <h1 className={h1}>Products</h1>
            <p className="text-xl ml-10">
              {numberProducts > 1 ? (
                <>
                  {numberProducts}{" "}
                  {numberProducts === 1 ? "product" : "products"}
                </>
              ) : (
                "0 products found"
              )}
            </p>
          </div>
          <hr />
          <div className="mt-3 w-fit">
            <div className="border-2 border-primary rounded-full px-2 py-1 text-sm">
              <label for="products">Sort by: </label>
              <select name="products" onChange={handleSort}>
                <option value="featured">Featured</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to low</option>
                <option value="discount">Discount: High to low</option>
              </select>
            </div>
          </div>
        </div>
        <ProductsCards data={filteredData} />
      </div>
    </div>
  );
};

export default Products;
