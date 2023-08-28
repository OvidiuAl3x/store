import React from "react";
import bgImage from "../assets/store-906722_1920.jpg";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="w-screen h-[100vh] bg-center bg-no-repeat flex items-start flex-col justify-center"
    >
      <div>
        <h1>New Collection</h1>
        <h3>from t-shirt, jeans, jacket, shirt, watches, bags</h3>
        <button className="bg-black uppercase text-white">Shop Now</button>
      </div>
    </div>
  );
};

export default Home;
