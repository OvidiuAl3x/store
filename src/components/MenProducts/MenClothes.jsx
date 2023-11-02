import React, { useEffect, useState } from "react";
import { GetDataMenClothes } from "../../service/ApiRequest";
import LeftBar from "../LeftBar";
import MenProductsCards from "./MenClothesCard";

const style = {
  button:
    "bg-primary uppercase text-white mt-2 px-4 py-2 hover:scale-105 duration-150 rounded-md",
  h1: "text-2xl md:text-4xl",
};

const MenClothes = () => {
  const { h1 } = style;
  const [data, setData] = useState();
  const [filterTags, setFilterTags] = useState([]);
  const [filterMobile, setFilterMobile] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await GetDataMenClothes();
      setData(data);
    })();
  }, []);

  const filteredData = data?.filter(
    (item) =>
      filterTags.length === 0 ||
      filterTags.includes(item.type.toLowerCase()) ||
      filterTags.includes(item.size)
  );

  const handleSort = async (e) => {
    let value = e.target.value;
    let asc;
    if (value === "priceLow") {
      const data = await GetDataMenClothes((value = "price"), (asc = "asc"));
      setData(data);
    } else if (value === "priceHigh") {
      const data = await GetDataMenClothes((value = "price"), (asc = "desc"));
      setData(data);
    } else if (value === "discount") {
      const data = await GetDataMenClothes(
        (value = "discount"),
        (asc = "desc")
      );
      const newItem = data?.filter((item) => {
        return item.discount;
      });
      setData(newItem);
    } else {
      const data = await GetDataMenClothes(value);
      setData(data);
    }
  };

  return (
    <div className="grid md:grid-cols-[2fr,6fr] lg:grid-cols-[2fr,7fr] xl:grid-cols-[1fr,5fr] xl:gap-10">
      <LeftBar
        filterTags={filterTags}
        setFilterTags={setFilterTags}
        data={data}
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
        <MenProductsCards data={filteredData} />
      </div>
    </div>
  );
};

export default MenClothes;
