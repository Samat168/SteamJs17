import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useState } from "react";
import { useEffect } from "react";
import "./burger.css";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    backgroundColor: "rgba(235, 246, 255, 0.2)",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Burger() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { changeCategory } = useProducts();
  const { catValue, change } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

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
    <div style={{ width: "65%" }}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          background:
            "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
          boxShadow: "0 0 3px rgba( 0, 0, 0, 0.4)",
        }}
      >
        Навигация
      </Button>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
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
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Link to={"/products"}>
            <a>Магазин</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Link to={"/new"}>
            <a>Новое и интересное</a>
          </Link>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem disableRipple>
          <li
            style={{ color: "white", fontSize: "17px", position: "relative" }}
            onClick={toggleCategory}
          >
            <a>Категории</a>
            {isCategoryOpen && (
              <ul
                style={{
                  position: "absolute",
                  backgroundColor: "rgb(23, 32, 51)",
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
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          <Link>
            <a>Избранное</a>
          </Link>
        </MenuItem>
        <MenuItem disableRipple>
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
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Link to={"/cart"}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "82%",
              }}
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
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
