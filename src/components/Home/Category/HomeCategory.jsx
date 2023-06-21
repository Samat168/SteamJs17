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
            width: "75%",
            margin: "auto",
            textAlign: "center",
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
          <SwiperSlide>
            <Box
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0), rgb(139,0,0)) 100%",
              }}
            >
              <img
                style={{ opacity: "0.25" }}
                src="https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=russian"
                alt=""
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
