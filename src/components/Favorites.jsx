import React from "react";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import imgFav from "../assets/favorite.png";
import { Link } from "react-router-dom";

const style = {
  h1: "text-xl md:text-3xl",
  h2: "text-base md:text-lg text-secondary ml-5",
};

const Favorites = ({ favorite, setFavorite }) => {
  const { h1, h2 } = style;

  const quantityFav = () => {
    return favorite.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const removeFav = (productRemove) => {
    setFavorite(favorite.filter((product) => product !== productRemove));
  };

  return (
    <div className="max-w-[1240px] mx-2 md:mx-auto">
      <div className="bg-white p-5">
        <div className="flex items-end">
          <h1 className={h1}>Favorite</h1>
          <h2 className={h2}>
            {quantityFav() === 1
              ? quantityFav() + " product"
              : quantityFav() + " products"}
          </h2>
        </div>
        <hr className="mb-5" />
        {quantityFav() >= 1 ? (
          <>
            {favorite.map((item) => (
              <div
                className="mt-2 flex max-h-[300px] border-b-2 border-primary "
                key={item.id}
              >
                <AiOutlineClose
                  className="absolute right-8 text-secondary cursor-pointer text-lg md:hidden"
                  onClick={() => removeFav(item)}
                />
                <div className="flex gap-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-[150px] m-auto"
                  />
                </div>
                <div className="flex justify-around gap-2 flex-col md:flex-row  ml-5 md:ml-0 md:justify-normal w-full">
                  <div className="md:mt-2">
                    <p>{item.title}</p>
                    <div className="flex items-center">
                      <p className="text-lg text-yellow-500">
                        {"★".repeat(item.reviewStar) +
                          "☆".repeat(5 - item.reviewStar)}
                      </p>
                      <p className="text-[12px]">({item.review})</p>
                    </div>
                  </div>

                  <div className="hidden md:block ml-auto mr-[3em]">
                    <span className="w-[1px] h-[90%] my-auto bg-secondary block"></span>
                  </div>
                  <div className="mb-[1em] flex  items-end gap-2 md:flex-col ">
                    {item.discount ? (
                      <div className="flex flex-col mt-auto text-end mr-2">
                        <p className="line-through text-base text-gray-500">
                          ${item.price}
                        </p>
                        <p className="font-semibold  text-base md:text-xl">
                          $
                          {(item.price * ((100 - item.discount) / 100)).toFixed(
                            2
                          )}
                        </p>
                      </div>
                    ) : (
                      <p className="mt-auto text-base md:text-xl mr-2 font-semibold text-end">
                        ${item.price}
                      </p>
                    )}
                    <div
                      className="flex items-center bg-primary  cursor-pointer w-fit md:w-auto md:m-2 rounded-[4px] border-2 border-black hover:bg-hover"
                      // onClick={() => addToCart(item)}
                    >
                      <div className="md:rounded-br-2xl md:bg-white py-2 px-2 md:px-2 md:h-full md:flex md:items-center md:py-1">
                        <FiShoppingCart />
                      </div>

                      <p className=" hidden md:block text-sm md:text-base mr-2 text-center w-full">
                        Add To Cart
                      </p>
                    </div>
                    <div
                      className="hidden md:flex items-center text-sm text-secondary cursor-pointer justify-end mr-2"
                      onClick={() => removeFav(item)}
                    >
                      <FiTrash2 />
                      <p className="ml-1">Remove</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="text-center mt-[5em]">
            <img src={imgFav} alt="no favorite products" className="mx-auto" />
            <h1 className="mt-5">Hmm, no products in your list.</h1>
            <p>
              Add now to Favorites and make lists according to your preferences.
            </p>
            <div className="flex justify-center my-4 md:my-10 ">
              <Link
                to="/products"
                className="bg-primary uppercase text-white mt-2 px-4 py-2 hover:translate-y-[-5px] duration-300 rounded-md shadow-lg"
              >
                View Products
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
