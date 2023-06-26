import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./navigate.css";
import { Button } from "@mui/material";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useProducts } from "../../contexts/ProductContextProvider";

const Navigate = () => {
  const { changeCategory } = useProducts();
  const { catValue, change } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { cart } = useCart();
  const { products } = cart;

  const navigate = useNavigate();
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(catValue);
  }, [change]);
  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  const handleNavigate = () => {
    navigate("/new");
  };

  const toggleCategory = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  const handleCategoryClick = (category) => {
    console.log(`Выбрана категория: ${category}`);
  };

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
            Корзина({products.length})
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
          boxShadow: "0 0 3px rgba( 0, 0, 0, 0.4)",
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
            <Link to={"/products"}>
              <a>Магазин</a>
            </Link>
          </li>

          <li style={{ color: "white", fontSize: "17px" }}>
            <Link to={"/new"}>
              <a>Новое и интересное</a>
            </Link>
          </li>

          <li
            style={{ color: "white", fontSize: "17px", position: "relative" }}
            onClick={toggleCategory}
          >
            <a>Категории</a>
            {isCategoryOpen && (
              <ul
                style={{
                  position: "absolute",
                  backgroundColor: "rgba(235, 246, 255, 0.2)",
                  padding: "10px",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
                  marginTop: "5px",
                  zIndex: "999",
                }}
              >
                <li>
                  <a
                    onClick={(e) =>
                      changeCategory({ category: e.target.innerText })
                    }
                  >
                    Шутеры
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) =>
                      changeCategory({ category: e.target.innerText })
                    }
                  >
                    Экшены
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) =>
                      changeCategory({ category: e.target.innerText })
                    }
                  >
                    Гонки
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) =>
                      changeCategory({ category: e.target.innerText })
                    }
                  >
                    Стратегии
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) =>
                      changeCategory({ category: e.target.innerText })
                    }
                  >
                    Файтинги
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) =>
                      changeCategory({ category: e.target.innerText })
                    }
                  >
                    Спортивные игры
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li style={{ color: "white", fontSize: "17px" }}>
            <Link>
              <a>Избранное</a>
            </Link>
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            height: "25px",
            marginRight: "5px",
            boxShadow: "1px 1px 0px rgba( 255, 255, 255, 0.2)",
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
