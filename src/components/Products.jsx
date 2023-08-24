import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      {data?.map((item) => (
        <>
          <h1>{item.title}</h1>
          <h1>{item.price}</h1>
          <img src={item.image} alt="" />
        </>
      ))}
    </div>
  );
};

export default Products;
