import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 300,
        backgroundColor: "#484662",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={item.pic1}
        title="green iguana"
        onClick={() => navigate(`/details/${item.id}`)}
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "13px" }}
        >
          {item.title}
        </Typography>
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
        <Typography variant="body2" color="text.secondary">
          {item.price} $
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
