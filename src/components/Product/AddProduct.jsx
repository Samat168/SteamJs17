import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    pic1: "",
    pic2: "",
    pic3: "",
    pic4: "",
    video: "",
    price: 0,
    category: "",
  });
  const { addProduct } = useProducts();

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  const handleAddProduct = () => {
    addProduct(product);
    setProduct({
      title: "",
      desc: "",
      pic1: "",
      pic2: "",
      pic3: "",
      pic4: "",
      video: "",
      price: 0,
      category: "",
    });
  };

  return (
    <Box sx={{ paddingBottom: "3%" }}>
      <Typography
        sx={{
          paddingTop: "2%",
          color: "white",
          WebkitTextStroke: "3px black",
          fontWeight: "900",
          fontSize: "44px",
        }}
        variant="h4"
        align="center"
      >
        ADMIN PANEL
      </Typography>
      <Box
        sx={{
          width: "60vw",
          margin: "10px auto",
          padding: "5% 5%",
        }}
      >
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="title"
          label="title"
          variant="outlined"
          value={product.title}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="desc"
          label="desc"
          variant="outlined"
          value={product.desc}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="video"
          label="video"
          variant="outlined"
          value={product.video}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic1"
          label="pic1"
          variant="outlined"
          value={product.pic1}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic2"
          label="pic2"
          variant="outlined"
          value={product.pic2}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic3"
          label="pic3"
          variant="outlined"
          value={product.pic3}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="pic4"
          label="pic4"
          variant="outlined"
          value={product.pic4}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="price"
          label="price"
          variant="outlined"
          value={product.price}
        />
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "10px",
          }}
        >
          <CategorySelect product={product} setProduct={setProduct} />
        </Box>

        <Box sx={{ backgroundColor: "orange", borderRadius: "5px" }}>
          <Button
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
              fontSize: "22px",
              fontWeight: "900",
              fontFamily: "segoe ui",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
            onClick={handleAddProduct}
            fullWidth
            variant="outlined"
            size="large"
            className="admin__button"
          >
            ADD PRODUCT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
