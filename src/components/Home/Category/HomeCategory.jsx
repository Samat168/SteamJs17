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

export default function HomeCategory() {
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
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <Box>
            <SwiperSlide className="category_slide">
              <Box
                sx={{
                  backgroundImage:
                    "url(https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=russian)",
                }}
              >
                <Box
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
            </SwiperSlide>
            <SwiperSlide className="category_slide">
              <Box
                sx={{
                  backgroundImage:
                    "url(https://store.steampowered.com/categories/homepageimage/category/strategy?cc=us&l=russian)",
                }}
              >
                <Box
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
            </SwiperSlide>
            <SwiperSlide className="category_slide">
              <Box
                sx={{
                  backgroundImage:
                    "url(https://store.steampowered.com/categories/homepageimage/category/fighting_martial_arts?cc=us&l=russian)",
                }}
              >
                <Box
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
            </SwiperSlide>
            <SwiperSlide className="category_slide">
              <Box
                sx={{
                  backgroundImage:
                    "url(https://store.steampowered.com/categories/homepageimage/category/sports?cc=us&l=russian)",
                }}
              >
                <Box
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
            </SwiperSlide>
            <SwiperSlide className="category_slide">
              <Box
                sx={{
                  backgroundImage:
                    "url(https://store.steampowered.com/categories/homepageimage/category/racing?cc=us&l=russian)",
                }}
              >
                <Box
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
            </SwiperSlide>
          </Box>
        </Swiper>
      </Box>
    </>
  );
}
