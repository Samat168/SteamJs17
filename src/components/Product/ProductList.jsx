import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useProducts } from "../../contexts/ProductContextProvider";
import Navigate from "../Navigator/Navigate";

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

  return (
    <Grid item md={9} sx={{ width: "75%", margin: "auto" }}>
      <Navigate />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "7%",
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
        sx={{ marginLeft: "45%" }}
        count={count}
        page={page}
        onChange={handleChange}
        color="primary"
      />
    </Grid>
  );
};

export default ProductList;
