import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CategorySelect({ product, setProduct }) {
  const handleChange = (e) => {
    setProduct({ ...product, category: e.target.value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Категории</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue=""
          label="Category"
          value={product.category}
          onChange={handleChange}
        >
          <MenuItem value="Гонки">Гонки</MenuItem>
          <MenuItem value="Экшены">Экшены</MenuItem>
          <MenuItem value="Шутеры">Шутеры</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
