import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const ProductDetails = () => {
  const { getProductDetails, productDetails } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);
  return (
    <Box sx={{ display: "flex", width: "75%", margin: "auto" }}>
      <Typography
        sx={{
          width: "73%",
          margin: "0 auto",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        Все игры / {productDetails?.category} / {productDetails?.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box>
          <CardMedia
            sx={{
              height: 467,
              width: 452,
            }}
            title="green iguana"
          />
          <Box
            sx={{
              display: "flex",
              marginTop: "14px",
              justifyContent: "space-around",
              width: "70%",
            }}
          >
            <CardMedia
              sx={{
                height: 60,
                width: 60,
              }}
              image={productDetails?.pic1}
              title="green iguana"
            />
            <CardMedia
              sx={{
                height: 60,
                width: 60,
              }}
              image={productDetails?.pic2}
              title="green iguana"
            />
            <CardMedia
              sx={{
                height: 60,
                width: 60,
              }}
              image={productDetails?.pic3}
              title="green iguana"
            />
          </Box>
        </Box>

        <Box sx={{ width: "33%" }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold", fontSize: "29px" }}
            >
              {productDetails?.title}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold", fontSize: "23px" }}
            >
              {productDetails?.price} KGS
            </Typography>
          </CardContent>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
