import React from "react";
import HomeCarousel from "./Carousel/HomeCarousel";
import HomeCategory from "./Category/HomeCategory";
import New from "./New/New";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <HomeCategory />
      <New />
    </div>
  );
};

export default Home;
