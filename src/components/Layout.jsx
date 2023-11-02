import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { FiPhoneCall, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaRegUser,
  FaRegHeart,
  FaGamepad,
  FaHome,
  FaUserAlt,
} from "react-icons/fa";
import { PiDressFill } from "react-icons/pi";
import { BsSearch, BsWatch } from "react-icons/bs";
import { BiSolidTShirt, BiSolidWatch, BiSolidWallet } from "react-icons/bi";
import { GiConverseShoe, GiClothes } from "react-icons/gi";

const style = {
  parent:
    "mb-10 md:mb-0 w-full md:relative bg-[#f2f6ff] border-b-[3px] border-primary md:border-b-0",
  media:
    "text-[25px] rounded-full border border-white p-1 m-[3px] cursor-pointer hover:scale-110 duration-300",
  navBar: "m-10",
  navBarParent:
    "hidden md:flex items-center w-full justify-center uppercase font-serif",
  mobileNav: "flex items-center border-b-2 border-primary w-full p-4",
  mobileNavIcon: "mr-2 text-[20px]",
  mobileNavParent:
    "absolute bg-[#f2f6ff] w-full px-8 md:hidden z-10  border-b-[3px] border-primary  animate-translateX h-full",
};

const Layout = () => {
  const {
    parent,
    navBar,
    navBarParent,
    media,
    mobileNav,
    mobileNavIcon,
    mobileNavParent,
  } = style;
  const [nav, setNav] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  // overflow hidden when open nav on mobile
  if (nav) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  } else {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
  //

  return (
    <>
      <div className={parent}>
        <div className="bg-primary text-white justify-between items-center h-10 hidden md:flex">
          <div className="flex ml-3 md:mx-[15%] items-center">
            <FaInstagram className={media} />
            <FaFacebookF className={media} />
            <FaTwitter className={media} />
            <FaYoutube className={media} />
          </div>
          <div className="flex mr-3 md:mx-[15%] items-center hover:scale-110 duration-300 cursor-pointer">
            <FaRegUser className="m-2" />
            <Link>My account</Link>
          </div>
        </div>

        <div className="flex justify-between items-center my-4 md:mt-4 md:mb-[-3px] ">
          <div className="hidden md:flex items-center mx-[15%]">
            <FiPhoneCall className="text-base md:text-3xl mr-2 text-primary" />
            <div>
              <p className=" text-[12px] md:text-sm text-primary">CALL US</p>
              <p className="font-bold text-[12px] md:text-[14px]">
                (123) 456 7890
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="md:hidden" onClick={handleClick}>
              {!nav ? (
                <FiMenu className="w-10 text-2xl" />
              ) : (
                <AiOutlineClose className="w-10 text-2xl" />
              )}
            </div>
            <Link to="/">
              <p className="ml-3 md:ml-0 w-fit text-3xl text-primary font-bold font-serif">
                Shop
              </p>
            </Link>
          </div>

          <div className="mr-3 text-lg flex md:text-2xl  md:mx-[15%] cursor-pointer">
            <BsSearch className="mx-2 hover:scale-110 duration-300" />
            <Link className="mx-2 hover:scale-110 duration-300">
              <FaRegHeart></FaRegHeart>
            </Link>
            <Link className="ml-2 hover:scale-110 duration-300">
              <FaOpencart />
            </Link>
          </div>
        </div>
        <nav>
          <ul className={!nav ? "hidden" : mobileNavParent}>
            <li className={mobileNav}>
              <FaUserAlt className={mobileNavIcon} />
              <Link onClick={() => setNav(false)}>My account</Link>
            </li>
            <li className={mobileNav}>
              <FaHome className={mobileNavIcon} />
              <Link to="" onClick={() => setNav(false)}>
                Home
              </Link>
            </li>
            <li className={mobileNav}>
              <BiSolidTShirt className={mobileNavIcon} />
              <Link to="/men-products" onClick={() => setNav(false)}>
                Mens
              </Link>
            </li>
            <li className={mobileNav}>
              <PiDressFill className={mobileNavIcon} />
              <Link to="" onClick={() => setNav(false)}>
                Womens
              </Link>
            </li>
            <li className={mobileNav}>
              <FaGamepad className={mobileNavIcon} />
              <Link to="" onClick={() => setNav(false)}>
                Electronics
              </Link>
            </li>
            <li className={mobileNav}>
              <BsWatch className={mobileNavIcon} />
              <Link to="" onClick={() => setNav(false)}>
                Jewelery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="md:mt-6 hidden md:block" />
      <nav>
        <ul className={navBarParent}>
          <li className={navBar}>
            <Link to="">Home</Link>
          </li>
          <li className={navBar}>
            <Link
              to="/men-products"
              className="flex items-center  hover:scale-110"
              onMouseOver={() => setDropDown(true)}
              onMouseOut={() => setDropDown(false)}
            >
              Mens
            </Link>
            {dropDown ? (
              <div
                className="flex flex-col border-2 border-primary absolute bg-white p-2 animate-opacity "
                onMouseOver={() => setDropDown(true)}
                onMouseOut={() => setDropDown(false)}
              >
                <Link
                  to="/men-clothes"
                  className="p-2 flex items-center border-b-primary border-b-[1px]"
                >
                  <GiClothes className="mr-2" />
                  <span className="hover:text-primary text-sm">Clothes</span>
                </Link>
                <Link
                  to="/men-accessories"
                  className="p-2 flex items-center border-b-primary border-b-[1px]"
                >
                  <BiSolidWatch className="mr-2" />
                  <span className="hover:text-primary text-sm">
                    Accessories
                  </span>
                </Link>
                <Link
                  to="/men-shoes"
                  className="p-2 flex items-center border-b-primary border-b-[1px]"
                >
                  <GiConverseShoe className="mr-2" />
                  <span className="hover:text-primary text-sm">Shoes</span>
                </Link>
                <Link to="/men-watches" className="p-2 flex items-center">
                  <BiSolidWallet className="mr-2" />
                  <span className="hover:text-primary text-sm">Watches</span>
                </Link>
              </div>
            ) : null}
          </li>
          <li className={navBar}>
            <Link to="">Womens</Link>
          </li>
          <li className={navBar}>
            <Link to="">Electronics</Link>
          </li>
          <li className={navBar}>
            <Link to="">Jewelery</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
