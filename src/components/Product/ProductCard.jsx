import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import "./ProductCard.css";
import WindowIcon from "@mui/icons-material/Window";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const {
    user: { email },
  } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="product_card">
      <img
        className="product_img"
        src={item.pic1}
        alt=""
        onClick={() => navigate(`/details/${item.id}`)}
      />
      <div className="product_card_bottom">
        <WindowIcon sx={{ color: "white" }} />
        {email === ADMIN ? (
          <>
            <Button
              sx={{ marginBottom: "8px" }}
              size="small"
              onClick={() => deleteProduct(item.id)}
            >
              Delete
            </Button>
            <Button
              sx={{ marginBottom: "8px" }}
              size="small"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>
          </>
        ) : (
          <></>
        )}
        <span className="product_price">${item.price}</span>
      </div>
    </div>
  );
}
