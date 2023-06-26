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
import { useNavigate } from "react-router-dom";

export default function App({ action, name }) {
  const [mainPic, setMainPic] = useState();
  const [video, setVideo] = useState();
  const [forPic, setForPic] = useState(false);
  const [forVideo, setForVideo] = useState(false);
  const changePic = (pic) => {
    setMainPic(pic);
    setForPic(true);
  };
  const returnPic = () => {
    setForPic(false);
  };
  const playVideo = (vid) => {
    setVideo(vid);
    setForVideo(true);
  };
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{ width: "100%", margin: "50px 0 10px 0", padding: "0 5px" }}>
        <h2 style={{ width: "65%", margin: "auto", color: "#c6d4df" }}>
          {name}
        </h2>
      </Box>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {action.map((item) => (
          <SwiperSlide
            style={{ display: "flex", flexDirection: "column" }}
            key={item.id}
          >
            <Box
              className={"home-slide"}
              onClick={() => navigate(`/details/${item.id}`)}
            >
              <Box className="home-slide_img">
                {forVideo ? (
                  <video controls autoPlay style={{ width: "100%" }}>
                    <source src={video} />
                  </video>
                ) : (
                  <img src={forPic ? mainPic : item.pic1} alt="" />
                )}
              </Box>
              <Box className="carousel_name_div">
                <h2 className="carousel_game_name">{item.title}</h2>
                <ul className="carousel_images">
                  <li style={{ width: "50%" }}>
                    <img
                      onMouseOver={(e) => changePic(e.target.src)}
                      onMouseOut={() => returnPic()}
                      className="li_img"
                      src={item.pic2}
                      alt=""
                    />
                  </li>
                  <li style={{ width: "50%" }}>
                    <img
                      onMouseOver={(e) => changePic(e.target.src)}
                      onMouseOut={() => returnPic()}
                      className="li_img"
                      src={item.pic3}
                      alt=""
                    />
                  </li>
                  <li style={{ width: "50%" }}>
                    <img
                      onMouseOver={(e) => changePic(e.target.src)}
                      onMouseOut={() => returnPic()}
                      className="li_img"
                      src={item.pic4}
                      alt=""
                    />
                  </li>
                  <li style={{ width: "50%" }}>
                    <video
                      onMouseOver={(e) => playVideo(e.target.id)}
                      onMouseOut={() => setForVideo(false)}
                      className="li_img"
                      id={item.video}
                      width="100%"
                      height="100%"
                      style={{ objectFit: "cover" }}
                    >
                      <source src={item.video} />
                    </video>
                  </li>
                </ul>

                <Box className="carousel_price">
                  <h3 style={{ color: "white", margin: "10px 0" }}>
                    Уже доступно
                  </h3>
                  <p style={{ color: "white", margin: "20px 0 5px 0" }}>
                    $29.99 USD
                  </p>
                </Box>
              </Box>
            </Box>
            <h3 className="carousel_adapitve_name">{item.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
