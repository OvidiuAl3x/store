import React from "react";

const style = {
  imgParent: "max-h-[200px] min-h-[200px] md:max-h-[300px] md:min-h-[300px]",
};

const ProductsCards = ({ data }) => {
  const { imgParent } = style;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {data?.map((item) => (
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
  );
};

export default ProductsCards;
