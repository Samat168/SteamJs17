import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContexProvider from "./contexts/CartContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <CartContexProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </CartContexProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
