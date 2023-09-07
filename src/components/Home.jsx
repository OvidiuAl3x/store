import React from "react";
import bgImage from "../assets/store-906722_1920.jpg";
import bgImage2 from "../assets/womans-legs-887286_1920.jpg";
import bgImage3 from "../assets/necktie-1284463_1920.jpg";
import bgImage4 from "../assets/pocket-watch-2569573_1920.jpg";
import bgImage5 from "../assets/smart-watch-821559_1920.jpg";
import { BsTruck } from "react-icons/bs";
import { LuPackageOpen } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";
import FeaturedProducts from "./FeaturedProducts";

const style = {
  button:
    "bg-primary uppercase text-white mt-2 px-3 py-2 hover:scale-105 duration-150 text-sm rounded-md",
  bgImage:
    "bg-cover bg-center bg-no-repeat flex items-start flex-col justify-end  p-3 shadow-lg shadow-black/30",
  bgImageColSpan2:
    "bg-cover bg-center bg-no-repeat flex items-start flex-col justify-end  p-3 col-span-2 shadow-lg shadow-black/30",
};

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-center bg-no-repeat flex items-start flex-col justify-center -mt-[30px] h-[60vh]"
      >
        <div className="ml-4 md:ml-[10%] backdrop-blur-sm">
          <p className="font-bold text-[3em] md:text-[5em] text-primary strokeClass">
            new
          </p>
          <p className="font-bold text-[3em] md:text-[5em] mt-[-0.6em] text-primary strokeClass">
            collection
          </p>
          <p className="text-base md:text-lg">
            From t-shirts, jeans, jackets, shirts, watches, bags
          </p>
          <button className="bg-primary uppercase text-white mt-10 px-4 py-2 md:px-8 md:py-4 font-bold hover:scale-105 duration-150 rounded-xl">
            Shop Now
          </button>
        </div>
      </div>

      <div className="flex items-center flex-col md:flex-row justify-evenly shadow-lg shadow-black/20 ">
        <div className="flex items-center my-4">
          <BsTruck className=" text-[2.4em] md:text-[3em] text-primary mr-4" />
          <div>
            <p className="text-lg md:text-2xl font-bold">Free Shipping</p>
            <p className="text-[12px] md:text-sm">
              Free shipping on all US <br />
              order or order abose $200
            </p>
          </div>
        </div>
        <div className="h-[1px] md:h-[80px] bg-primary w-[80%] md:w-[1px]"></div>
        <div className="flex items-center   my-4">
          <LuPackageOpen className=" text-[2.4em] md:text-[3em] text-primary mr-4" />
          <div>
            <p className="text-lg md:text-2xl font-bold">30 Days Return</p>
            <p className="text-[12px] md:text-sm">
              Simply return it within
              <br /> 30 days for an exchange
            </p>
          </div>
        </div>
        <div className="h-[1px] md:h-[80px] bg-primary w-[80%] md:w-[1px]"></div>

        <div className="flex items-center  my-4">
          <RiSecurePaymentLine className=" text-[2.4em] md:text-[3em] text-primary mr-4" />
          <div>
            <p className="text-lg md:text-2xl font-bold">100% Payment Secure</p>
            <p className="text-[12px] md:text-sm">
              Simply return it within <br />
              30 days for an exchange
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1240px] m-4 lg:mx-auto mt-[8em]">
        <div className="grid grid-cols-2 gap-4 h-[30em] ">
          <div
            style={{ backgroundImage: `url(${bgImage5})` }}
            className={style.bgImage}
          >
            <div className="uppercase text-white backdrop-blur-md">
              <p className="text-sm md:text-base ">Men's Online</p>
              <p className="text-base md:text-xl font-bold">accessories</p>
            </div>
            <button className={style.button}>Shop Now</button>
          </div>
          <div
            style={{ backgroundImage: `url(${bgImage4})` }}
            className={style.bgImage}
          >
            <div className="uppercase text-white backdrop-blur-md">
              <p className="text-sm md:text-base  ">For Women Online</p>
              <p className="text-base md:text-xl font-bold">Women's jewelery</p>
            </div>

            <button className={style.button}>Shop Now</button>
          </div>

          <div
            style={{ backgroundImage: `url(${bgImage3})` }}
            className={style.bgImageColSpan2}
          >
            <div className="uppercase text-white backdrop-blur-md">
              <p className="text-base md:text-xl ">Men's</p>
              <p className="text-2xl md:text-3xl font-bold strokeClass">
                Collection
              </p>
            </div>
            <button className={style.button}>Shop Now</button>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${bgImage2})` }}
          className="bg-cover bg-center bg-no-repeat flex items-start flex-col justify-center p-3 shadow-lg shadow-black/30"
        >
          <div className="uppercase text-white backdrop-blur-md ">
            <p className="text-base md:text-xl">Women's</p>
            <p className="text-2xl md:text-3xl  font-bold strokeClass ">
              Collection
            </p>
          </div>
          <button className={style.button}>Shop Now</button>
        </div>
      </div>

      <FeaturedProducts />
    </>
  );
};

export default Home;
