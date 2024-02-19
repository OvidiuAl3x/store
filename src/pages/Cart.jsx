import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import imgFav from "../assets/cartEmpty.png";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import {
  addCartQuantity,
  addFavorite,
  removeCart,
  removeCartQuantity,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const cartSelector = useSelector((state) => state.cart.cart);
  const quantityCart = () => {
    return cartSelector.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const handleAddCartQuantity = (product) => {
    dispatch(addCartQuantity(product));
  };

  const handleRemoveCartQuantity = (product) => {
    dispatch(removeCartQuantity(product));
  };

  const handleRemoveCart = (productRemove) => {
    dispatch(removeCart(productRemove));
  };

  const totalSum = cartSelector.map(
    (item) =>
      (item.price * ((100 - item.discount) / 100)).toFixed(2) * item.quantity
  );

  let sum = 0;

  totalSum.forEach((num) => {
    sum += num;
  });

  const handleAddFavorite = (product) => {
    dispatch(addFavorite({ product }));
  };

  return (
    <div className="max-w-[1240px] mx-2 md:mx-auto ">
      <div className="p-5">
        <h1 className="text-xl md:text-3xl mb-10">Cart</h1>
        {quantityCart() >= 1 ? (
          <div className="grid md:grid-cols-[6fr,2fr] lg:grid-cols-[7fr,2fr] xl:grid-cols-[6fr,2fr] xl:gap-10">
            <div className="bg-white rounded-md shadow-lg">
              {cartSelector.map((item) => (
                <div
                  className="mt-2 flex max-h-[300px] border-b-2 border-primary px-2"
                  key={item.id}
                >
                  <AiOutlineClose
                    className="absolute right-8 text-secondary cursor-pointer text-lg md:hidden"
                    onClick={() => handleRemoveCart(item)}
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
                        <div className="flex flex-col mt-auto text-end">
                          <p className="line-through text-base text-gray-500">
                            ${item.price}
                          </p>
                          <p className="font-semibold  text-base md:text-xl">
                            $
                            {(
                              item.price *
                              ((100 - item.discount) / 100)
                            ).toFixed(2)}
                          </p>
                        </div>
                      ) : (
                        <p className="mt-auto text-base md:text-xl mr-2 font-semibold text-end">
                          ${item.price}
                        </p>
                      )}
                      <div className="flex items-center">
                        <div
                          className="border-2 border-primary p-1 rounded-[50%] cursor-pointer"
                          onClick={() =>
                            item.quantity > 1
                              ? handleRemoveCartQuantity(item)
                              : handleRemoveCart(item)
                          }
                        >
                          <FaMinus className="text-[10px]" />
                        </div>
                        <p className="text-lg m-2">{item.quantity}</p>
                        <div
                          className="border-2 border-primary p-1  rounded-[50%] cursor-pointer"
                          onClick={() => handleAddCartQuantity(item)}
                        >
                          <FaPlus className="text-[10px]" />
                        </div>
                      </div>
                      <p
                        className="text-sm text-secondary cursor-pointer text-end"
                        onClick={() => {
                          handleRemoveCart(item);
                          handleAddFavorite(item);
                        }}
                      >
                        Move to Favorite
                      </p>
                      <p
                        className="text-sm text-secondary cursor-pointer"
                        onClick={() => handleRemoveCart(item)}
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-md shadow-lg h-fit p-2">
              <h1 className="my-2 font-bold text-2xl">Order summary</h1>
              <div className="flex justify-between items-center">
                <p className="my-2">Product cost:</p>
                <p>${sum.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="my-2">Delivery cost:</p>
                <p>{sum.toFixed(2) > 500 ? "0" : "$19.99"}</p>
              </div>
              <p className="my-2 font-bold text-2xl">Total:</p>
              <p className="my-2 font-bold text-2xl">
                $
                {sum.toFixed(2) > 500
                  ? sum.toFixed(2)
                  : (sum + 19.99).toFixed(2)}
              </p>

              <button className="my-2 bg-primary w-full rounded-xl p-2 text-white hover:bg-hover">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-[5em]">
            <img src={imgFav} alt="no favorite products" className="mx-auto" />
            <h1 className="mt-5">Your Cart Is Empty… </h1>
            <p className="w-[50%] m-auto">
              You have no items in your shopping cart.
              <br /> Start shopping by Searching, Browsing, Going to the
              Homepage, Navigation Bar or click on the logo to return to our
              home page
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

export default Cart;
