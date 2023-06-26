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
  const [cat, setCat] = useState("0");
  const name1 = "Экшены";
  const name2 = "Шутеры";
  const clearCat = () => {
    setFree([]);
  };
  const category = (el) => {
    setCat(el);
  };
  console.log(cat);
  useEffect(() => {
    products.map((product) => {
      if (product.category === "Экшены") {
        setAction((prevAction) => [...prevAction, product]);
      } else if (product.category === "Шутеры") {
        setShooter((prevShooter) => [...prevShooter, product]);
      }
    });
  }, [products]);

  useEffect(() => {
    products.map((el) => {
      if (el.category === cat) {
        setFree((prevFree) => [...prevFree, el]);
      } else if (el.price === cat) {
        setFree((prevFree) => [...prevFree, el]);
      }
    });
  }, [cat]);

  return (
    <div>
      <HomeCarousel action={action} name={name1} />
      <HomeCategory />
      <HomeCarousel action={shooter} name={name2} />
      <New free={free} category={category} clearCat={clearCat} />
    </div>
  );
};

export default Home;
