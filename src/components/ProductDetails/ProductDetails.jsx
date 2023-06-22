import React, { useEffect, useRef } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Navigate from "../Navigator/Navigate";

const ProductDetails = () => {
  const { getProductDetails, productDetails } = useProducts();

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
  return (
    <div>
      <Navigate />
      <div className="container_details">
        <div className="details_info">
          <p className="detail-info">
            Все игры / {productDetails?.category} / {productDetails?.title}
          </p>
          <p className="detail-title">{productDetails?.title}</p>
        </div>
        <div className="details_wrapper">
          <div className="block_details_left">
            <video ref={videoRef} width="100%" height="370" controls autoPlay>
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
      </div>
    </div>
  );
};

export default ProductDetails;
