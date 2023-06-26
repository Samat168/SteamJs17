import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContexProvider from "./contexts/CartContextProvider";
import FavoritesContextProvider from "./contexts/FavoriteContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FavoritesContextProvider>
      <AuthContextProvider>
        <CartContexProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </CartContexProvider>
      </AuthContextProvider>
    </FavoritesContextProvider>
  </BrowserRouter>
);
