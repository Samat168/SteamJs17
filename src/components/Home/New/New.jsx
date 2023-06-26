import React from "react";
import "./new.css";
import WindowIcon from "@mui/icons-material/Window";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const New = ({ free, category, clearCat }) => {
  const [pict1, setPict1] = useState();
  const [pict2, setPict2] = useState();
  const [pict3, setPict3] = useState();
  const showFoto = (img) => {
    setPict1(img.pic1);
    setPict2(img.pic2);
    setPict3(img.pic3);
  };
  const navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <div className="new_div">
        <div>
          <ul className="new_list" style={{}}>
            <li
              className="new_list_elem"
              onClick={(e) => {
                category(0);
                clearCat();
              }}
            >
              <a>Бесплатные</a>
            </li>
            <li
              className="new_list_elem"
              onClick={(e) => {
                category(e.target.innerText);
                clearCat();
              }}
            >
              <a>Гонки</a>
            </li>
            <li
              className="new_list_elem"
              onClick={(e) => {
                category(e.target.innerText);
                clearCat();
              }}
            >
              <a>Экшены</a>
            </li>
            <li
              className="new_list_elem"
              onClick={(e) => {
                category(e.target.innerText);
                clearCat();
              }}
            >
              <a>Шутеры</a>
            </li>
            <li
              className="new_list_elem"
              onClick={(e) => {
                category(e.target.innerText);
                clearCat();
              }}
            >
              <a>Файтинги</a>
            </li>
            <li
              className="new_list_elem"
              onClick={(e) => {
                category(e.target.innerText);
                clearCat();
              }}
            >
              <a>Спортивные игры</a>
            </li>
            <li
              className="new_list_elem"
              onClick={(e) => {
                category(e.target.innerText);
                clearCat();
              }}
            >
              <a>Стратегии</a>
            </li>
          </ul>
        </div>
        <div className="new_games_div">
          <div>
            {free.map((item) => (
              <div
                onMouseOver={(e) => showFoto(item)}
                onClick={() => navigate(`/details/${item.id}`)}
                className="card_div"
                key={item.id}
                id={item.id}
                style={{
                  display: "flex",
                }}
              >
                <img
                  className="new_games_img"
                  id={item.id}
                  src={item.pic1}
                  alt=""
                />

                <div className="new_games_price">
                  <h3 className="games_text">{item.title}</h3>
                  <WindowIcon className="games_text" />
                  {item.price === 0 ? (
                    <h3 className="games_text">Free</h3>
                  ) : (
                    <h3 className="games_text">{item.price} $</h3>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="new_images">
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
    </div>
  );
};

export default New;
