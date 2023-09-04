import React, { useEffect, useState } from "react";

const FeaturedProducts = () => {
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
      <h1 className="uppercase font-bold text-4xl text-center mb-[2em]">
        Featured Products
      </h1>
      <div className="grid md:grid-cols-4 gap-4 text-center">
        {data?.slice(0, 8).map((item) => (
          <div className="bg-white flex flex-col py-5">
            <span className="absolute ml-[10px] mt-[-10px] bg-primary px-[6px] text-white">
              30%
            </span>
            <img
              src={item.image}
              alt=""
              width="300px"
              className="max-h-[300px] min-h-[300px]"
            />
            <p className="text-md font-semibold">{item.title}</p>
            <br />
            <div className="flex justify-center mt-auto text-lg">
              <p className="mr-2 line-through">${item.price}</p>
              <p className="text-primary font-semibold">
                ${(item.price * ((100 - 30) / 100)).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center m-10">
        <button className="bg-primary uppercase text-white mt-2 px-4 py-2 hover:scale-105 duration-150 rounded-md">
          View All
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
