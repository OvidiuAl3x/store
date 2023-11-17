import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const MiniCart = ({ cart, dropDownCart, setDropDownCart }) => {
  const totalSum = () => {
    return cart.reduce(
      (sum, { price, discount, quantity }) =>
        sum + (price * ((100 - discount) / 100)).toFixed(2) * quantity,
      0
    );
  };

  const rounded = totalSum().toFixed(2);
  const totalProduct = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  return (
    <>
      {dropDownCart ? (
        <div
          className="hidden md:block absolute text-sm mt-10 border-2 border-primary bg-white cursor-default animate-opacity"
          onMouseOut={() => setDropDownCart(false)}
          onMouseOver={() => setDropDownCart(true)}
        >
          <div className="clipCart hidden lg:block">
            <span></span>
          </div>
          {cart.map((item) => (
            <div
              className="flex gap-3 border-b-2 border-primary px-2 items-center py-1"
              key={item.id}
            >
              <img src={item.image} alt={item.title} className="w-[30px]" />
              <p className="text-secondary text-[12px] w-[100px]">
                {item.title.substring(0, 50)}...
              </p>
              <p className="text-secondary text-sm">x{item.quantity}</p>
              <p className="font-bold ml-auto">
                ${(item.price * ((100 - item.discount) / 100)).toFixed(2)}
              </p>
            </div>
          ))}
          {totalSum() === 0 ? (
            <p className="p-2">No products in cart</p>
          ) : (
            <>
              <div className="flex px-2 text-secondary border-b-2 border-primary my-2">
                <p className="mr-2">Total:</p>
                {totalProduct() === 1 ? (
                  <p>{totalProduct()} product</p>
                ) : totalProduct() <= 0 ? (
                  <p>No products</p>
                ) : (
                  <p>{totalProduct()} products</p>
                )}
                <p className="ml-2">${rounded}</p>
              </div>
              <Link
                to="/cart"
                className="flex items-center bg-primary  cursor-pointer m-2 rounded-[4px] border-2 border-black hover:bg-hover"
              >
                <div className="rounded-br-2xl bg-white px-2 h-full flex items-center py-1 text-base">
                  <MdOutlineKeyboardDoubleArrowRight />
                </div>
                <p className="text-sm mr-2 text-center w-full text-white">
                  See cart details
                </p>
              </Link>
            </>
          )}
        </div>
      ) : null}
    </>
  );
};

export default MiniCart;
