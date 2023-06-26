import { Switch } from "@mui/material";
import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS } from "../helpers/consts";

export const cartContex = createContext();
export const useCart = () => useContext(cartContex);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("favorite")),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

const CartContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("favorite"));

    if (!cart) {
      localStorage.setItem(
        "favorite",
        JSON.stringify({
          products: [],
        })
      );
      favorite = {
        products: [],
      };
    }

    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  const addProductToFavorite = (product) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = { products: [] };
    }
    let newProduct = {
      item: product,
    };

    let productToFind = favorite.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      favorite.products.push(newProduct);
    } else {
      favorite.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  const checkProductInFavorite = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    }
  };

  const deleteFavoriteProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: ACTIONS.GET_CART, payload: cart });
  };

  const values = {
    cart: state.cart,
    getCart,
    addProductToFavorite,

    checkProductInFavorite,

    deleteFavoriteProduct,
  };
  return <cartContex.Provider value={values}>{children}</cartContex.Provider>;
};

export default CartContexProvider;
