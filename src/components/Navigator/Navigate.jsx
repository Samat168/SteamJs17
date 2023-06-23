import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./navigate.css";
import { Button } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Navigate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);
  return (
    <div style={{ marginTop: "40px" }}>
      <Link to={"/cart"}>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "82%" }}
        >
          <Button
            sx={{
              width: "9%",
              color: "#a4d007 ",
              background: "rgba(164,208,7,0.4)",
              height: "20px",
              borderRadius: "0",
            }}
          >
            Корзина
          </Button>
        </div>
      </Link>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
          boxshadow: "0 0 3px rgba( 0, 0, 0, 0.4)",
          width: "65%",
          margin: "auto",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
            margin: "10px",
          }}
        >
          <li style={{ color: "white", fontSize: "17px" }}>
            <a>Магазин</a>
          </li>
          <li style={{ color: "white", fontSize: "17px" }}>
            <a>Новое и интересное</a>
          </li>
          <li style={{ color: "white", fontSize: "17px" }}>
            <a>Категории</a>
          </li>
          <li style={{ color: "white", fontSize: "17px" }}>
            <a>Избранное</a>
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            height: "25px",
            marginRight: "5px",
            boxshadow: "1px 1px 0px rgba( 255, 255, 255, 0.2)",
            color: "#fff",
          }}
        >
          <input
            type="text"
            placeholder="поиск"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <SearchIcon color="action" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
