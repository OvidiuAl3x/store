import React, { useEffect, useState } from "react";

const style = {
  button:
    "bg-primary uppercase text-white mt-2 px-4 py-2 hover:scale-105 duration-150 rounded-md",
  h1: "uppercase font-bold text-3xl md:text-4xl text-center mb-[2em]",
  imgParent: "max-h-[200px] min-h-[200px] md:max-h-[300px] md:min-h-[300px]",
};

const FeaturedProducts = () => {
  const { button, h1, imgParent } = style;
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch("http://localhost:3000/products")).json();
      setData(data);
    };
    dataFetch();
  }, []);

  return (
    <div className="max-w-[1240px] m-4 lg:mx-auto mt-[8em]">
      <h1 className={h1}>Featured Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {data?.slice(0, 8).map((item) => (
          <div className="bg-white flex flex-col py-5">
            <span className="absolute ml-[10px] mt-[-10px] bg-primary px-[6px] text-white">
              {item.discount}%
            </span>
            <div className={imgParent}>
              <img src={item.image} alt="" className="h-full w-full" />
            </div>

            <p className="text-sm md:text-md font-semibold">{item.title}</p>
            <br />
            <div className="flex justify-center mt-auto text-md md:text-lg">
              <p className="mr-2 line-through">${item.price}</p>
              <p className="text-primary font-semibold">
                ${(item.price * ((100 - item.discount) / 100)).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4 md:my-10">
        <button className={button}>View All</button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
