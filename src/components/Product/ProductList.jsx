import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useProducts } from "../../contexts/ProductContextProvider";
import Navigate from "../Navigator/Navigate";
import Burger from "../BurgerMenu/Burger";
import "./ProductList.css";

const ProductList = () => {
  const { getProducts, products, searchParams } = useProducts();

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(products.length / itemsPerPage);

  const fill = products.filter((elem) => {
    return elem.category === "Гонки";
  });

  console.log(fill);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  // Get unique categories
  const categories = [...new Set(products.map((item) => item.category))];

  // Filter products by category
  const filteredProducts = (category) => {
    return products.filter((item) => item.category === category);
  };

  const activeCategory = searchParams.get("category");

  // ! для адаптивки
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
  // ! для адаптивки

  return (
    <Grid
      className="GridList"
      item
      md={9}
      sx={{
        width: "75%",
        margin: "auto",
        "@media (max-width: 990px)": {
          width: "89%",
        },
        "@media (max-width: 716px)": {
          width: "70%",
        },
      }}
    >
      {windowWidth < 990 ? <Burger /> : <Navigate />}

      <Box
        className="BoxList"
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "7%",
          "@media (max-width: 716px)": {
            grid: "none",
          },
        }}
      >
        {currentData().map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            sx={{ marginBottom: "20px" }}
          />
        ))}
      </Box>
      <Pagination
        sx={{
          marginLeft: "43%",
          marginTop: "30px",
          "@media (max-width: 800px)": {
            marginLeft: "40%",
          },
          "@media (max-width: 559px)": {
            marginLeft: "38%",
          },
          "@media (max-width: 420px)": {
            marginLeft: "25%",
          },
        }}
        count={count}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </Grid>
  );
};

export default ProductList;
