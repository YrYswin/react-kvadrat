import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

interface Props {
  items: any;
  active: any;
  onChange?: any;
  width?: any;
  isPrice?: any;
}

const SelectUI: React.FC<Props> = ({ items, active, onChange, width, isPrice }) => {
  return (
    <FormControl sx={{ width: width || 180, height: 30 }}>
      <CustomSelect
        defaultValue={active}
        onChange={(e) => onChange(e.target.value)}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        size="small"
      >
        {!isPrice && (
          <MenuItemStyle value="None">
            <em>None</em>
          </MenuItemStyle>
        )}
        {items.map((str, index) => (
          <MenuItemStyle key={index} value={isPrice ? str.id : str}>
            {isPrice ? str.label : str}
          </MenuItemStyle>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default SelectUI;

const CustomSelect = styled(Select)(({ theme }) => ({
  background: "#262626",
  width: "100%",
  border: "1px solid gray",
  color: "#fff",
  "& .MuiSelect-select": {
    color: "#fff", // Цвет текста внутри Select
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "gray",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "lightgray",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "lightgray",
  },
  "& .MuiMenuItem-root": {
    color: "#fff", // Цвет текста в элементах меню
    "&.Mui-selected": {
      backgroundColor: "rgba(255, 255, 255, 0.2)", // Цвет фона выбранного элемента
      color: "#fff", // Цвет текста выбранного элемента
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.3)", // Цвет фона при наведении на выбранный элемент
      },
    },
  },
}));

const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
  fill: "#fff",
  "*": {
    fill: "#fff",
  },
}));
