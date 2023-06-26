import React, { useEffect, useRef } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Navigate from "../Navigator/Navigate";
import { useState } from "react";
import Burger from "../BurgerMenu/Burger";
import ProductComment from "./ProductComment";
import ProductCommentList from "./ProductCommentList";
import WindowIcon from "@mui/icons-material/Window";
import { useCart } from "../../contexts/CartContextProvider";

const ProductDetails = () => {
  const { getProductDetails, productDetails } = useProducts();
  const { addProductToCart, checkProductInCart } = useCart();

  const { id } = useParams();
  const videoRef = useRef(null);

  useEffect(() => {
    getProductDetails(id);
    videoRef.current.src = null;
  }, []);

  useEffect(() => {
    if (productDetails?.video) {
      videoRef.current.src = productDetails.video;
    }
  }, [productDetails]);

  const formatReleaseDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  // ! для адаптивки
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // ! для адаптивки
  return (
    <div className="conter">
      <div className="container_details">
        <div className="details_info">
          <p className="detail-info">
            Все игры / {productDetails?.category} / {productDetails?.title}
          </p>
          <p className="detail-title">{productDetails?.title}</p>
        </div>
        <div className="details_wrapper">
          <div className="block_details_left">
            <video ref={videoRef} className="details_video" controls autoPlay>
              <source src={productDetails?.video} type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
            <div className="details_img">
              <img className="img_product" src={productDetails?.pic1} alt="" />
              <img className="img_product" src={productDetails?.pic2} alt="" />
              <img className="img_product" src={productDetails?.pic3} alt="" />
              <img className="img_product" src={productDetails?.pic4} alt="" />
            </div>
          </div>

          <div className="block_details_right">
            <img
              src={productDetails?.pic1}
              alt=""
              className="img_product_right"
            />
            <p className="details_right_desc">{productDetails?.desc}</p>
            <p className="release-date">
              Дата выхода:
              <span className="date-name">
                {" "}
                {formatReleaseDate(productDetails?.releaseDate)}
              </span>
            </p>
          </div>
        </div>
        <div className="product_details_cost">
          <div
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className="product_details_buy">
              Купить {productDetails?.title}
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/732/732225.png"
              alt=""
              width={30}
            />
            <div className="game_cost">
              <div className="price">${productDetails?.price} USD</div>
              <div
                className={`${
                  checkProductInCart(productDetails?.id)
                    ? "remove-to-cart"
                    : "add-to-cart"
                }`}
                onClick={() => addProductToCart(productDetails)}
              >
                {checkProductInCart(productDetails?.id)
                  ? "Удалить из корзины"
                  : "В корзину"}
              </div>
            </div>
          </div>
        </div>
        <h3 className="people-review">ОТЗЫВЫ ПОКУПАТЕЛЕЙ</h3>
        <ProductCommentList productId={id} />
      </div>
    </div>
  );
};

export default ProductDetails;
