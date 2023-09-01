import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaRegUser,
  FaRegHeart,
} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const style = {
  nav: "m-10 hover:scale-110  duration-300",
  media:
    "text-[25px] rounded-full border border-white p-1 m-[3px] cursor-pointer hover:scale-110 duration-300",
};

const Layout = () => {
  return (
    <>
      <div className="">
        <div className="bg-primary text-white flex justify-between items-center h-10">
          <div className="flex mx-[15%] items-center">
            <FaInstagram className={style.media} />
            <FaFacebookF className={style.media} />
            <FaTwitter className={style.media} />
            <FaYoutube className={style.media} />
          </div>
          <div className="flex mx-[15%] items-center hover:scale-110 duration-300 cursor-pointer">
            <FaRegUser className="m-2" />
            <Link>My account</Link>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center mx-[15%]">
            <FiPhoneCall className="text-3xl mr-2 text-primary" />
            <div>
              <p className="text-sm text-primary">CALL US</p>
              <p className="font-bold text-[14px]">(123) 456 7890</p>
            </div>
          </div>
          <p className="w-fit text-3xl text-primary font-bold font-serif">
            Shop
          </p>

          <div className="flex text-2xl mx-[15%] cursor-pointer">
            <BsSearch className="mx-2 hover:scale-110 duration-300" />
            <Link className="mx-2 hover:scale-110 duration-300">
              <FaRegHeart></FaRegHeart>
            </Link>
            <Link className="ml-2 hover:scale-110 duration-300">
              <FaOpencart />
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      <nav>
        <ul className="flex items-center w-full justify-center uppercase font-serif ">
          <li className={style.nav}>
            <Link to="/">Home</Link>
          </li>
          <li className={style.nav}>
            <Link to="">Mens</Link>
          </li>
          <li className={style.nav}>
            <Link to="">Womens</Link>
          </li>
          <li className={style.nav}>
            <Link to="">Electronics</Link>
          </li>
          <li className={style.nav}>
            <Link to="">Jewelery</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
