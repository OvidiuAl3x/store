import React from "react";
import { MdLocationOn, MdEmail, MdPhone, MdArrowRight } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const style = {
  h1: "text-md md:text-1xl uppercase font-bold",
  media:
    "text-[30px]  rounded-full border border-white p-1 m-[5px] cursor-pointer hover:scale-110 duration-300",
  divParentUniversal: "flex items-center my-4",
  iconsContact: "text-lg md:text-xl mr-4",
};

const Footer = () => {
  const { h1, media, divParentUniversal, iconsContact } = style;
  return (
    <div className="bg-primary -mb-4">
      <div className=" grid md:grid-cols-3 text-white max-w-[1240px] lg:mx-auto mt-[8em] justify-center md:justify-normal py-10 md:py-20">
        <div className="ml-2 my-2">
          <h1 className={h1}>Contact Details</h1>
          <hr className="w-[30%] mb-5" />
          <div className={divParentUniversal}>
            <MdLocationOn className={iconsContact} />
            <p>
              123 Building Name, Area Name, <br /> Street, City, Country -
              Zipcode
            </p>
          </div>
          <div className={divParentUniversal}>
            <MdPhone className={iconsContact} />
            <p>123-456-7890</p>
          </div>
          <div className={divParentUniversal}>
            <MdEmail className={iconsContact} />
            <p>info@shop.com</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className={h1}>Our Company</h1>
          <hr className="w-[30%] mb-5" />
          <div className={divParentUniversal}>
            <MdArrowRight />
            Delivery
          </div>
          <div className={divParentUniversal}>
            <MdArrowRight />
            About Us
          </div>
          <div className={divParentUniversal}>
            <MdArrowRight />
            Contact Us
          </div>
          <div className={divParentUniversal}>
            <MdArrowRight />
            Sitemap
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className={h1}>Join our newsletter now</h1>
          <hr className="w-[30%] mb-5" />
          <div className={divParentUniversal}>
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded-md text-primary"
            />
            <button className="bg-white rounded-lg text-primary p-2 ml-4 font-bold md:text-xl">
              GO
            </button>
          </div>
          <p>Get E-mail updates about our latest offers</p>
          <div className={divParentUniversal}>
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
