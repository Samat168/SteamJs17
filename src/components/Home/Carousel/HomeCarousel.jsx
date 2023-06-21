import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Navigation } from "swiper";

import { Box } from "@mui/material";

export default function App() {
  const pic =
    "https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg?t=1686291121";
  const [mainpic, setMainpic] = useState(pic);

  const changePic = (elem) => {
    console.log(elem);
    setMainpic(elem.src);
  };
  const mouseOut = () => {
    setMainpic(pic);
  };
  return (
    <>
      <Box sx={{ width: "100%", margin: "50px 0 10px 0", padding: "0 5px" }}>
        <h2 style={{ width: "65%", margin: "auto", color: "#c6d4df" }}>
          Экшены
        </h2>
      </Box>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              margin: "0 40px",
              backgroundColor: "#171a21",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "65%",
                borderRight: "3px solid black",
              }}
            >
              <img src={mainpic} alt="" />
            </Box>
            <Box sx={{ width: "35%", margin: "5px" }}>
              <h2
                style={{
                  maxHeight: "62px",
                  overflow: "hidden",
                  color: "white",
                  fontSize: "24px",
                  margin: "20px",
                  textAlign: "start",
                }}
              >
                Spider Man
              </h2>
              <ul style={{ display: "flex", flexWrap: "wrap" }}>
                <li style={{ width: "50%" }}>
                  <img
                    onMouseOver={(e) => changePic(e.target)}
                    onMouseOut={() => mouseOut()}
                    className="li_img"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1817190/ss_02bb2ac97c3ce854344a537d9ed89c70ba45c3d3.600x338.jpg?t=1672784176"
                    alt=""
                  />
                </li>
                <li style={{ width: "50%" }}>
                  <img
                    onMouseOver={(e) => changePic(e.target)}
                    onMouseOut={() => mouseOut()}
                    className="li_img"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1817190/ss_616a0e2ab905281a483d99d0e1f07fc0749770d2.600x338.jpg?t=1672784176"
                    alt=""
                  />
                </li>
                <li style={{ width: "50%" }}>
                  <img
                    onMouseOver={(e) => changePic(e.target)}
                    onMouseOut={() => mouseOut()}
                    className="li_img"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1817190/ss_34cd494551068f3c83179942b6964ece1333ccda.600x338.jpg?t=1672784176"
                    alt=""
                  />
                </li>
                <li style={{ width: "50%" }}>
                  <img
                    onMouseOver={(e) => changePic(e.target)}
                    onMouseOut={() => mouseOut()}
                    className="li_img"
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1817190/ss_971beba92204ad268878b23aa5288cc4f2118788.600x338.jpg?t=1672784176"
                    alt=""
                  />
                </li>
              </ul>
              <Box
                sx={{
                  textAlign: "start",
                }}
              >
                <h3 style={{ color: "white", margin: "10px 0" }}>
                  Уже доступно
                </h3>
                <p style={{ color: "white", margin: "20px 0 5px 0" }}>
                  $29.99 USD
                </p>
              </Box>
            </Box>
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
    </>
  );
}
