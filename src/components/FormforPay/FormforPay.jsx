import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

const FormforPay = () => {
  return (
    <div style={{ width: "70%", marginLeft: "20%", marginTop: "5%" }}>
      <h3 style={{ color: "white", marginBottom: "20px" }}> Способ Оплаты </h3>
      <Box sx={{ Width: "30%" }}>
        <FormControl
          sx={{ backgroundColor: "white", borderRadius: "10px", width: "30%" }}
        >
          <InputLabel id="demo-simple-select-label">VISA</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue=""
            label="Category"
            value={MenuItem.value}
          >
            <MenuItem value="visa">visa</MenuItem>
            <MenuItem value="Paypal">Paypal</MenuItem>
            <MenuItem value="WebMoney">WebMoney</MenuItem>
            <MenuItem value="MasterCard">MasterCard</MenuItem>
            <MenuItem value="American Express">American Express</MenuItem>
            <MenuItem value="MBANK">MBANK</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          Width: "30%",
          marginTop: "8%",
          display: "flex",
        }}
      >
        <Box>
          <h4 style={{ color: "white" }}>Номер карты</h4>
          <FormControl
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              marginTop: "3%",
              width: "150px",
              border: "none",
            }}
          >
            <Input
              type="number"
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                height: "50px",
                padding: "10px",
                borderBottom: "none",
              }}
            />
          </FormControl>
        </Box>
        <Box sx={{ marginLeft: "5%" }}>
          <h4 style={{ color: "white", marginBottom: "3%" }}>
            Срок действия карты
          </h4>
          <FormControl
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <InputLabel id="demo-simple-select-label">-- </InputLabel>
            <Select
              sx={{ height: "50px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue=""
              label="Category"
              value={MenuItem.value}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              marginLeft: "15px",
            }}
          >
            <InputLabel id="demo-simple-select-label">-- </InputLabel>
            <Select
              sx={{ height: "50px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue=""
              label="Category"
              value={MenuItem.value}
            >
              <MenuItem value="1">2023</MenuItem>
              <MenuItem value="2">2024</MenuItem>
              <MenuItem value="3">2025</MenuItem>
              <MenuItem value="4">2026</MenuItem>
              <MenuItem value="5">2027</MenuItem>
              <MenuItem value="6">2028</MenuItem>
              <MenuItem value="7">2029</MenuItem>
              <MenuItem value="8">2030</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};

export default FormforPay;
