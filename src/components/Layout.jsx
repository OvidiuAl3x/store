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

// ! Need nav in mobile

const Layout = () => {
  return (
    <>
      <div className="mb-10 md:mb-0">
        <div className="bg-primary text-white flex justify-between items-center h-10">
          <div className="flex ml-3 md:mx-[15%] items-center">
            <FaInstagram className={style.media} />
            <FaFacebookF className={style.media} />
            <FaTwitter className={style.media} />
            <FaYoutube className={style.media} />
          </div>
          <div className="flex mr-3 md:mx-[15%] items-center hover:scale-110 duration-300 cursor-pointer">
            <FaRegUser className="m-2" />
            <Link>My account</Link>
          </div>
        </div>

        <div className="flex justify-around md:justify-between items-center mt-2">
          <div className="flex items-center  md:mx-[15%]">
            <FiPhoneCall className="text-md md:text-3xl mr-2 text-primary" />
            <div>
              <p className=" text-[12px] md:text-sm text-primary">CALL US</p>
              <p className="font-bold text-[12px] md:text-[14px]">
                (123) 456 7890
              </p>
            </div>
          </div>
          <p className="w-fit text-3xl text-primary font-bold font-serif">
            Shop
          </p>

          <div className="text-lg flex md:text-2xl  md:mx-[15%] cursor-pointer">
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
        <ul className="hidden md:flex items-center w-full justify-center uppercase font-serif ">
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
