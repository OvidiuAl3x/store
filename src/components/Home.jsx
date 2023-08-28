import React from "react";
import bgImage from "../assets/store-906722_1920.jpg";
import { BsTruck } from "react-icons/bs";
import { LuPackageOpen } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-center bg-no-repeat flex items-start flex-col justify-center -mt-[30px] h-[60vh]"
      >
        <div className="ml-[10%] backdrop-blur-sm">
          <p className="font-bold text-[5em]">new </p>
          <p className="font-bold text-[5em] mt-[-0.6em]">collection</p>
          <p className="text-lg">
            From t-shirt, jeans, jacket, shirt, watches, bags
          </p>
          <button className="bg-black uppercase text-white mt-10 px-8 py-4 font-bold hover:scale-105 duration-150">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex items-center justify-evenly shadow-md shadow-[#6E01A9]/50">
        <div className="flex items-center my-4">
          <BsTruck className="text-[3em] text-[#6E01A9] mr-4" />
          <div>
            <p className="text-2xl font-bold">Free Shipping</p>
            <p className="text-sm">
              Free shipping on all US <br />
              order or order abose $200
            </p>
          </div>
        </div>
        <div className="h-[80px] bg-[#6E01A9] w-[1px]"></div>
        <div className="flex items-center   my-4">
          <LuPackageOpen className="text-[3em] text-[#6E01A9] mr-4" />
          <div>
            <p className="text-2xl font-bold">30 Days Return</p>
            <p className="text-sm">
              Simply return it within
              <br /> 30 days for an exchange
            </p>
          </div>
        </div>
        <div className="h-[80px] bg-[#6E01A9] w-[1px]"></div>

        <div className="flex items-center  my-4">
          <RiSecurePaymentLine className="text-[3em] text-[#6E01A9] mr-4" />
          <div>
            <p className="text-2xl font-bold">100% Payment Secure</p>
            <p className="text-sm">
              Simply return it within <br />
              30 days for an exchange
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
