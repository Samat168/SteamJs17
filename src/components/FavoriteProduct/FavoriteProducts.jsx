import { Box, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigate from "../Navigator/Navigate";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "../Product/ProductCard";

const FavoriteProducts = () => {
  const { getProducts, products, searchParams } = useProducts();
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  useEffect(() => {
    const favorites = Object.keys(localStorage).filter((key) =>
      key.startsWith("favorite_")
    );
    setFavoriteProducts(favorites);
  }, []);

  // pagination
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    const favoriteData = favoriteProducts
      .slice(begin, end)
      .map((key) => JSON.parse(localStorage.getItem(key)));

    return favoriteData.filter((item) =>
      filteredProducts(activeCategory).includes(item)
    );
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
            isFavorite={favoriteProducts.includes(`favorite_${item.id}`)}
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

export default FavoriteProducts;
