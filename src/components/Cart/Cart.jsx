import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../../contexts/CartContextProvider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Cart.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const { cart, getCart, changeProductCount, deleteCartProduct } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  return (
    <TableContainer
      component={Paper}
      style={{
        width: "65%",
        marginLeft: "18%",
        backgroundColor: "rgba(0,0,0,0.2)",
        // minHeight: "77px",
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'

        
      }}
    >
      <h1 style={{ color: "whitesmoke", margin: " 5% 0 5% 3%" }}>
        Ваша Корзина
      </h1>
      <Table
        sx={{
          // minWidth: 650,
          backgroundColor: "rgba(0,0,0,0.2)",
          minHeight: "77px",
          color: "white",
          marginBottom: "3%",
          borderRadius: "10px",
        }}
        aria-label="simple table"
      >
        <TableBody >
          {cart?.products.map((row) => (
            <TableRow
            className="cart"
              key={row.item.id}
             
            >
              <TableCell component="th" scope="row">
                <img width={150} style={{borderRadius:'10px'}} src={row.item.pic1} alt="" />
              </TableCell>
              <TableCell sx={{ color: "white", display : {xs: 'block'}}} align="rigth">
                {row.item.title}
              </TableCell>
              <TableCell sx={{ color: "white" , }} align="left">
                {row.item.category}
              </TableCell>
              <TableCell sx={{ color: "white", }} align="left">
                {row.item.price} $
              </TableCell>
              {/* <TableCell align="right">
                <input
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                  min={1}
                  max={20}
                  type="number"
                  value={row.count}
                />
              </TableCell> */}
              
              <TableCell align="right">
                <button
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "10%",
                    padding: "5px",
                  }}
                  onClick={() => deleteCartProduct(row.item.id)}
                  // sx={{
                  //   background:
                  //     "linear-gradient(90deg, rgba(62, 103, 150, 0.919) 11.38%, rgba(58, 120, 177, 0.8) 25.23%, rgb(15, 33, 110) 100%)",
                  // }}
                >
                  Удалить
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to={"/formforpay"}>
        <Button>BUY NOW FOR {cart?.totalPrice} $</Button>
      </Link>
    </TableContainer>
  );
}
