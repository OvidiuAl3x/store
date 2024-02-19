import React, { useEffect, useState } from "react";
import LeftBar from "../LeftBar";
import MenProductsCards from "./MenClothesCard";
import { useDispatch, useSelector } from "react-redux";
import { setProductsMen } from "../../redux/actions/productActions";

const style = {
  button:
    "bg-primary uppercase text-white mt-2 px-4 py-2 hover:scale-105 duration-150 rounded-md",
  h1: "text-2xl md:text-4xl",
};

const MenClothes = () => {
  const { h1 } = style;
  const [filterTags, setFilterTags] = useState([]);
  const [filterMobile, setFilterMobile] = useState(false);
  const dispatch = useDispatch();

  const productsMen = useSelector((state) => state.menProducts.products);

  const getDataMenClothes = async (price, asc) => {
    const response = await fetch(
      `http://localhost:3000/products?category=men&type2=clothes&_sort=${price}&_order=${asc}`
    );
    if (response.ok) {
      return dispatch(setProductsMen(await response.json()));
    }
    throw new Error("something went wrong");
  };

  useEffect(() => {
    getDataMenClothes();
  }, []);

  const filteredData = productsMen?.filter(
    (item) =>
      filterTags.length === 0 ||
      filterTags.includes(item.type.toLowerCase()) ||
      filterTags.includes(item.size)
  );

  return (
    <div className="grid md:grid-cols-[2fr,6fr] lg:grid-cols-[2fr,7fr] xl:grid-cols-[1fr,5fr] xl:gap-10">
      <LeftBar
        filterTags={filterTags}
        setFilterTags={setFilterTags}
        data={productsMen}
        filterMobile={filterMobile}
        setFilterMobile={setFilterMobile}
      />
      <div className="max-w-[1240px] mx-2 md:mr-2">
        <div className="bg-white h-32 mb-2 p-5">
          <div className="flex items-end">
            <h1 className={h1}>Products</h1>
          </div>
          <hr />
          <div className="mt-3 flex gap-5 justify-around md:block">
            <div
              className="border-2 border-primary rounded-full px-2 py-1 text-sm md:hidden"
              onClick={() => setFilterMobile(true)}
            >
              <p>Filters</p>
            </div>
            <div className="border-2 border-primary rounded-full px-2 py-1 text-sm w-fit">
              <label htmlFor="products">Sort by: </label>
              <select name="products">
                <option value="featured">Featured</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to low</option>
                <option value="discount">Discount: High to low</option>
              </select>
            </div>
          </div>
        </div>

        <MenProductsCards data={filteredData} />
      </div>
    </div>
  );
};

export default MenClothes;
