import React from "react";

const style = {
  // imgParent: "max-h-[250px] min-h-[250px] lg:max-h-[300px] lg:min-h-[300px]",
  imgParent: "w-[200px] lg:w-[250px] m-auto",
};

const MenClothesCard = ({ data }) => {
  const { imgParent } = style;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center mx-2 ">
      {data?.map((item) => (
        <div
          className="bg-white flex flex-col py-5 shadow-lg w-fit"
          key={item.id}
        >
          {item.discount ? (
            <span className="absolute ml-[10px] mt-[-10px] bg-primary px-[6px] text-white">
              {item.discount}%
            </span>
          ) : null}

          <div className={imgParent}>
            <img src={item.image} alt={item.title} className="h-full w-full" />
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

export default MenClothesCard;
