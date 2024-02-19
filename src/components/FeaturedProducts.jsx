import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const style = {
  button:
    "bg-primary uppercase text-white mt-2 px-4 py-2 hover:scale-105 duration-150 rounded-md",
  h1: "uppercase font-bold text-3xl md:text-4xl text-center mb-[2em]",
  imgParent: "max-h-[200px] min-h-[200px] md:max-h-[300px] md:min-h-[300px]",
};

const FeaturedProducts = () => {
  const { button, h1, imgParent } = style;

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const GetData = async (price, asc) => {
    const response = await fetch(
      `http://localhost:3000/products?_sort=${price}&_order=${asc}`
    );
    if (response.ok) {
      return dispatch(setProducts(await response.json()));
    }
    throw new Error("something went wrong");
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="max-w-[1240px] m-4 lg:mx-auto mt-[8em]">
      <h1 className={h1}>Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {products?.slice(0, 8).map((item) => (
          <div className="bg-white flex flex-col py-5" key={item.id}>
            {item.discount ? (
              <span className="absolute ml-[10px] mt-[-10px] bg-primary px-[6px] text-white">
                {item.discount}%
              </span>
            ) : null}
            <div className={imgParent}>
              <img src={item.image} alt="" className="h-full w-full" />
            </div>

            <p className="text-sm md:text-base font-semibold">{item.title}</p>
            <br />
            {item.discount ? (
              <div className="flex justify-center mt-auto text-base md:text-lg">
                <p className="mr-2 line-through">${item.price}</p>
                <p className="text-primary font-semibold">
                  ${(item.price * ((100 - item.discount) / 100)).toFixed(2)}
                </p>
              </div>
            ) : (
              <p className="mt-auto text-base md:text-lg">${item.price}</p>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4 md:my-10">
        <Link to="/products" className={button}>
          View All
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
