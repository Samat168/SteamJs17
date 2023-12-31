import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "./category.css";

// import required modules
import { Navigation } from "swiper";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useEffect } from "react";

export default function HomeCategory() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 990) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Box>
        <h2
          style={{
            color: "#c6d4df",
            width: "65%",
            margin: "auto",
            textAlign: "start",
            marginBottom: "20px",
          }}
        >
          Игры по категориям
        </h2>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <Box>
            <SwiperSlide className="category_slide">
              <Link to={"/products"}>
                <Box
                  id="Экшены"
                  sx={{
                    backgroundImage:
                      "url(https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=russian)",
                  }}
                >
                  <Box
                    className="category_div"
                    sx={{
                      width: "250px",
                      height: "250px",

                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0), rgb(139,0,0)) 100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <h3
                      style={{
                        color: "white",
                        marginBottom: "20px",
                      }}
                    >
                      Экшн
                    </h3>
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="category_slide">
              <Link to={"/products"}>
                <Box
                  sx={{
                    backgroundImage:
                      "url(https://store.steampowered.com/categories/homepageimage/category/strategy?cc=us&l=russian)",
                  }}
                >
                  <Box
                    className="category_div"
                    sx={{
                      width: "250px",
                      height: "250px",

                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0), rgb(0,0,139)) 100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <h3
                      style={{
                        color: "white",
                        marginBottom: "20px",
                      }}
                    >
                      Стратегии
                    </h3>
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="category_slide">
              <Link to={"/products"}>
                <Box
                  sx={{
                    backgroundImage:
                      "url(https://store.steampowered.com/categories/homepageimage/category/fighting_martial_arts?cc=us&l=russian)",
                  }}
                >
                  <Box
                    className="category_div"
                    sx={{
                      width: "250px",
                      height: "250px",

                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0), rgb(139,0,139)) 100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <h3
                      style={{
                        color: "white",
                        marginBottom: "20px",
                      }}
                    >
                      Файтинг
                    </h3>
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="category_slide">
              <Link to={"/products"}>
                <Box
                  sx={{
                    backgroundImage:
                      "url(https://store.steampowered.com/categories/homepageimage/category/sports?cc=us&l=russian)",
                  }}
                >
                  <Box
                    className="category_div"
                    sx={{
                      width: "250px",
                      height: "250px",

                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0), rgb(233,140,0)) 100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <h3
                      style={{
                        color: "white",
                        marginBottom: "20px",
                      }}
                    >
                      Спортивные игры
                    </h3>
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>

            <SwiperSlide className="category_slide">
              <Link to={"/products"}>
                <Box
                  sx={{
                    backgroundImage:
                      "url(https://store.steampowered.com/categories/homepageimage/category/racing?cc=us&l=russian)",
                  }}
                >
                  <Box
                    className="category_div"
                    sx={{
                      width: "250px",
                      height: "250px",

                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0), rgb(0,139,139)) 100%",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <h3
                      style={{
                        color: "white",
                        marginBottom: "20px",
                      }}
                    >
                      Гонки
                    </h3>
                  </Box>
                </Box>
              </Link>
            </SwiperSlide>
          </Box>
        </Swiper>
      </Box>
    </>
  );
}
