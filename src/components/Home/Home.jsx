import React, { useEffect } from "react";
import HomeCarousel from "./Carousel/HomeCarousel";
import HomeCategory from "./Category/HomeCategory";
import New from "./New/New";

import { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const Home = () => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  const [action, setAction] = useState();

  useEffect(() => {
    products.forEach((product) => {
      console.log(product);
    });
  }, [products]);
  return (
    <div>
      <HomeCarousel action={action} />
      <HomeCategory />
      <New />
    </div>
  );
};

export default Home;
