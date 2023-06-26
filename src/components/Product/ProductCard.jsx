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
import { Favorite } from "@mui/icons-material";
import { useFavorites } from "../../contexts/FavoriteContextProvider";
import { IconButton } from "@mui/material";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { addToFavorites, checkProductInFavorites, removeFromFavorites } =
    useFavorites();
  const handleToggleFavorite = () => {
    if (checkProductInFavorites(item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };
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
        <IconButton
          sx={{ color: checkProductInFavorites(item.id) ? "red" : "white" }}
          onClick={handleToggleFavorite}
        >
          <Favorite />
        </IconButton>

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
