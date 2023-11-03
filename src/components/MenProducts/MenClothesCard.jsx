import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const style = {
  imgParent: "max-w-[150px] md:max-w-[250px]  md:max-h-[300px] m-auto",
};

const MenClothesCard = ({ data, favorite, setFavorite }) => {
  const { imgParent } = style;

  const addFavorite = (product) => {
    let newFavorite = [...favorite];
    let itemFavorite = newFavorite.find((item) => product.id === item.id);
    if (!itemFavorite) {
      itemFavorite = { ...product, quantity: 1 };
      newFavorite.push(itemFavorite);
    } else {
      console.log("already exist");
    }
    setFavorite(newFavorite);
  };

  const removeFavorite = (product) => {
    const remove = favorite.filter((element) => element.id !== product);
    setFavorite(remove);
  };

  const checkFavorite = (item) => favorite?.find((item2) => item2.id === item);

  return (
    <div className="flex gap-2 md:gap-5 flex-wrap justify-center md:justify-normal">
      {data?.map((item) => (
        <div
          className="bg-white flex flex-col shadow-lg w-fit justify-between"
          key={item.id}
        >
          {item.discount ? (
            <span className="absolute ml-[10px] mt-[1em] bg-primary px-[6px] text-white">
              {item.discount}%
            </span>
          ) : null}
          <div className="ml-auto">
            {!checkFavorite(item.id) ? (
              <FaRegHeart
                className="absolute mt-2 ml-[-30px] text-lg cursor-pointer"
                onClick={() => addFavorite(item)}
              />
            ) : (
              <FaHeart
                className="absolute mt-2 ml-[-30px] text-lg cursor-pointer text-red-600 animate-translateFav"
                onClick={() => removeFavorite(item.id)}
              />
            )}
          </div>
          <div className={imgParent}>
            <img src={item.image} alt={item.title} className="h-full w-full" />
          </div>

          <div className="flex flex-col justify-between gap-5">
            <div>
              <p className="text-sm md:text-base font-semibold text-center">
                {item.title}
              </p>
              <div className="flex items-center ml-2">
                <p className="text-lg text-yellow-500">
                  {"★".repeat(item.reviewStar) +
                    "☆".repeat(5 - item.reviewStar)}
                </p>
                <p className="text-[12px]">({item.review})</p>
              </div>
            </div>

            <div>
              {item.discount ? (
                <div className="flex justify-start flex-col mt-auto ml-2">
                  <p className="line-through text-sm text-gray-500">
                    ${item.price}
                  </p>
                  <p className="font-semibold  text-base md:text-lg">
                    ${(item.price * ((100 - item.discount) / 100)).toFixed(2)}
                  </p>
                </div>
              ) : (
                <p className="mt-auto text-base md:text-lg ml-2 font-semibold ">
                  ${item.price}
                </p>
              )}
              <div className="flex items-center bg-primary  cursor-pointer m-2 rounded-[4px] border-2 border-black hover:bg-hover">
                <div className="rounded-br-2xl bg-white px-2 h-full flex items-center py-1">
                  <FiShoppingCart />
                </div>

                <p className="text-sm md:text-base mr-2 text-center w-full">
                  Add To Cart
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenClothesCard;
