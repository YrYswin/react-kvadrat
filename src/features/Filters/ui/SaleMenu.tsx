import React from "react";
import { MenuItem, Select, Box, styled } from "@mui/material";
import { priceVariable } from "../../../utils/data";
import { useDispatch } from "react-redux";
import { setPrice } from "../store/slice";

const CustomSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#333",
  color: "white",
  width: "200px",
  borderRadius: "4px",
  fontSize: "16px",

  "& .MuiSvgIcon-root": {
    color: "white",
  },
}));

function SaleMenu() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const idPrice = event.target.value;
    const option = priceVariable.find((x) => x.id === idPrice);
    if (option) {
      dispatch(setPrice(option));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "40px",
        height: "10px",
      }}
    >
      <CustomSelect defaultValue={priceVariable[0].id} onChange={handleChange} displayEmpty>
        {priceVariable.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.label}
          </MenuItem>
        ))}
      </CustomSelect>
    </Box>
  );
}

export default SaleMenu;
