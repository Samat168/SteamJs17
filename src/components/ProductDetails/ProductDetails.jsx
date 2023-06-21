import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Navigate from "../Navigator/Navigate";

const ProductDetails = () => {
  const { getProductDetails, productDetails } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);
  return (
    <div>
      <Navigate />
      <div className="container_details">
        <div className="details_info">
          <p className="detail-info">
            Все игры / {productDetails?.category} / {productDetails?.title}{" "}
          </p>
          <p className="detail-title">{productDetails?.title}</p>
        </div>
        <div className="details_wrapper">
          <div className="block_details_left">
            <video width="600" height="370" controls autoPlay>
              <source
                src="https://cdn.akamai.steamstatic.com/steam/apps/256951745/movie480_vp9.webm?t=1686273391"
                type="video/mp4"
              />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
