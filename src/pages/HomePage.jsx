import React, { useState, useEffect } from "react";
import Navigate from "../components/Navigator/Navigate";
import Home from "../components/Home/Home";
import Burger from "../components/BurgerMenu/Burger";

const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth < 990 ? <Burger /> : <Navigate />}
      <Home />
    </div>
  );
};

export default HomePage;
