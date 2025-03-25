import React from "react";
import heroImage from "../assets/images/heroImage.jpg";
import DishesCarousel from "./dishesCarousel";
const Home = () => {
  return (
    <div>
      <div className="relative w-full h-[70vh]">
        <img src={heroImage} alt="" className=" w-full h-full object-cover" />
        <div className="absolute z-10 top-1/3 left-1/3 ">
          <p className="text-5xl font-bold text-white">ByteEats</p>
          <p className="text-4xl font-bold text-white">
            Explore the finest food and beverages in Delhi NCR
          </p>
        </div>
      </div>
      <DishesCarousel />
    </div>
  );
};

export default Home;
