import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";

const pages = [
  { name: "Магазин", link: "/", id: 1 },
  { name: "Игры", link: "/products", id: 2 },
  // { name: "ADMIN", link: "/admin", id: 3 },
];
const settings = ["Profile", "Account", "Dashboard"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#171a21", height: "100px" }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "0",
          width: "100%",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
            alt="Logo"
            style={{ width: "176px" }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.id} to={page.link}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
              {email === ADMIN ? (
                <Link to="/admin">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">ADMIN</Typography>
                  </MenuItem>
                </Link>
              ) : null}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.id} to={page.link}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            {email === ADMIN ? (
              <Link to="/admin">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  ADMIN
                </Button>
              </Link>
            ) : null}
          </Box>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{
                p: 0,
                display: "flex",
                justifyContent: "flex-end",
                width: "8%",
                marginLeft: "28%",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://img.freepik.com/free-vector/cute-kitsune-with-sword-cartoon-character-art-object-isolated_138676-3159.jpg"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {email ? (
              <MenuItem>
                <Typography textAlign="center">{email}</Typography>
              </MenuItem>
            ) : (
              <Link to="/auth">
                <MenuItem>
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    Register
                  </Typography>
                </MenuItem>
              </Link>
            )}

            {email && (
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  handleLogout();
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
