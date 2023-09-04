import React from "react";
import { MdLocationOn, MdEmail, MdPhone, MdArrowRight } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const style = {
  h1: "text-md md:text-1xl uppercase font-bold",
  media:
    "text-[20px] md:text-[30px] rounded-full border border-white p-1 m-[3px] cursor-pointer hover:scale-110 duration-300",
};

const Footer = () => {
  const { h1, media } = style;
  return (
    <div className="bg-primary -mb-4">
      <div className=" grid md:grid-cols-3 text-white max-w-[1240px] lg:mx-auto mt-[8em] justify-center md:justify-normal">
        <div className="ml-2 my-2">
          <h1 className={h1}>Contact Details</h1>
          <hr className="w-[30%] mb-5" />
          <div className="flex items-center my-2">
            <MdLocationOn className=" text-lg md:text-xl mr-4" />
            <p>
              123 Building Name, Area Name, <br /> Street, City, Country -
              Zipcode
            </p>
          </div>
          <div className="flex items-center my-2 ">
            <MdPhone className=" text-lg md:text-xl mr-4" />
            <p>123-456-7890</p>
          </div>
          <div className="flex items-center my-2 ">
            <MdEmail className=" text-lg md:text-xl mr-4" />
            <p>info@shop.com</p>
          </div>
        </div>
        <div>
          <h1 className={h1}>Our Company</h1>
          <hr className="w-[30%] mb-5" />
          <div className="flex items-center my-2">
            <MdArrowRight />
            Delivery
          </div>
          <div className="flex items-center my-2">
            <MdArrowRight />
            About Us
          </div>
          <div className="flex items-center my-2">
            <MdArrowRight />
            Contact Us
          </div>
          <div className="flex items-center my-2">
            <MdArrowRight />
            Sitemap
          </div>
        </div>
        {/* sa fac mai jos mobil padding-intre text mai mic input si mai mari social media */}
        <div className="mb-4">
          <h1 className={h1}>Join our newsletter now</h1>
          <hr className="w-[30%] mb-5" />
          <div className="flex flex-row items-center">
            <input
              type="text"
              placeholder="Email Address"
              className="p-3 rounded-md"
            />
            <button className="bg-white rounded-lg text-primary px-3 py-3 ml-4 font-bold md:text-xl">
              GO
            </button>
          </div>
          <p>Get E-mail updates about our latest offers</p>
          <div className="flex items-center">
            <FaInstagram className={media} />
            <FaFacebookF className={media} />
            <FaTwitter className={media} />
            <FaYoutube className={media} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
