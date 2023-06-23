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
  const [action, setAction] = useState([]);
  const [shooter, setShooter] = useState([]);
  const [free, setFree] = useState([]);
  const name1 = "Экшены";
  const name2 = "Шутеры";

  useEffect(() => {
    products.map((product) => {
      if (product.category === "Экшены") {
        setAction((prevAction) => [...prevAction, product]);
      } else if (product.category === "Шутеры") {
        setShooter((prevShooter) => [...prevShooter, product]);
      }

      if (product.price === 0) {
        setFree((prevFree) => [...prevFree, product]);
      }
    });
  }, [products]);

  return (
    <div>
      <HomeCarousel action={action} name={name1} />
      <HomeCategory />
      <HomeCarousel action={shooter} name={name2} />
      <New free={free} />
    </div>
  );
};

export default Home;
