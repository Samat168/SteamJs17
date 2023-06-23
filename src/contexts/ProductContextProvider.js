import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../helpers/consts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_PRODUCTS, payload: data });
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({ type: ACTIONS.GET_PRODUCT_DETAILS, payload: data });
  };

  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
    navigate(`/products`);
  };

  // ! searching
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "All") {
      search.delete(query);
    } else if (query === "_sort") {
      search.set(query, "price");
      search.set("_order", value);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };

  const values = {
    addProduct,
    fetchByParams,
    getProducts,
    products: state.products,
    deleteProduct,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
