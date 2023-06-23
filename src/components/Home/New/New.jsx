import React from "react";
import "./new.css";
import WindowIcon from "@mui/icons-material/Window";
import { useState } from "react";

const New = ({ free, category, clearCat }) => {
  const [pict1, setPict1] = useState();
  const [pict2, setPict2] = useState();
  const [pict3, setPict3] = useState();
  const showFoto = (img) => {
    setPict1(img.pic1);
    setPict2(img.pic2);
    setPict3(img.pic3);
  };

  return (
    <div
      style={{
        width: "65%",
        margin: "auto",

        borderRadius: "10px",
        padding: "10px 0",
      }}
    >
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            margin: "10px",
          }}
        >
          <li
            onClick={(e) => {
              category(0);
              clearCat();
            }}
            style={{ color: "white", fontSize: "17px" }}
          >
            <a>Бесплатные</a>
          </li>
          <li
            onClick={(e) => {
              category(e.target.innerText);
              clearCat();
            }}
            style={{ color: "white", fontSize: "17px" }}
          >
            <a>Гонки</a>
          </li>
          <li
            onClick={(e) => {
              category(e.target.innerText);
              clearCat();
            }}
            style={{ color: "white", fontSize: "17px" }}
          >
            <a>Экшены</a>
          </li>
          <li
            onClick={(e) => {
              category(e.target.innerText);
              clearCat();
            }}
            style={{ color: "white", fontSize: "17px" }}
          >
            <a>Шутеры</a>
          </li>
          <li
            onClick={(e) => {
              category(e.target.innerText);
              clearCat();
            }}
            style={{ color: "white", fontSize: "17px" }}
          >
            <a>Файтинги</a>
          </li>
          <li
            onClick={(e) => {
              category(e.target.innerText);
              clearCat();
            }}
            style={{ color: "white", fontSize: "17px" }}
          >
            <a>Спортивные игры</a>
          </li>
          <li
            onClick={(e) => {
              category(e.target.innerText);
              clearCat();
            }}
            style={{ color: "white", fontSize: "17px" }}
          >
            <a>Стратегии</a>
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div style={{}}>
          {free.map((item) => (
            <div
              onMouseOver={(e) => showFoto(item)}
              className="card_div"
              key={item.id}
              id={item.id}
              style={{
                display: "flex",
                margin: "0 0 10px",
              }}
            >
              <img
                id={item.id}
                style={{ width: "40%", margin: "5px 0" }}
                src={item.pic1}
                alt=""
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <h3 className="games_text">{item.title}</h3>
                <WindowIcon className="games_text" />
                {item.price === 0 ? (
                  <h3 className="games_text">Free</h3>
                ) : (
                  <h3 className="games_text">{item.price}</h3>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            width: "60%",
            height: "700px",
            background: "rgba(235, 246, 255, 0.20)",
          }}
        >
          <ul
            style={{
              width: "100%",
            }}
          >
            <li
              style={{
                margin: "5px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ maxWidth: "90%" }} src={pict1} alt="" />
            </li>
            <li
              style={{
                margin: "5px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ maxWidth: "90%" }} src={pict2} alt="" />
            </li>
            <li
              style={{
                margin: "5px 0",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img style={{ maxWidth: "90%" }} src={pict3} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default New;
