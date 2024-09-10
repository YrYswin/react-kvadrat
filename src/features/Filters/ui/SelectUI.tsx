import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { PriceVariableState } from "../../../utils/dataTypes";

interface Props {
  itemsPrice?: PriceVariableState[];
  itemsAdress?: string[];
  active: string;
  onChange?: (value: string) => void;
  width?: number;
  isPrice?: boolean;
}

const SelectUI: React.FC<Props> = ({
  itemsPrice,
  itemsAdress,
  active,
  onChange,
  width,
  isPrice,
}) => {
  // Обработчик изменения выбора
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    if (onChange) {
      onChange(event.target.value as string); // Приведение типа к string
    }
  };

  // Установим значение для Select
  const value = active || "None"; // Если active пустое, используем "None"

  return (
    <FormControl sx={{ width: width || 180, height: 30 }}>
      <CustomSelect
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        size="small"
      >
        {!isPrice && (
          <MenuItemStyle value="None">
            <em>Не выбрано</em>
          </MenuItemStyle>
        )}
        {isPrice
          ? itemsPrice?.map((item) => (
              <MenuItemStyle key={item.id} value={item.id}>
                {item.label}
              </MenuItemStyle>
            ))
          : itemsAdress?.map((item, index) => (
              <MenuItemStyle key={index} value={item}>
                {item}
              </MenuItemStyle>
            ))}
      </CustomSelect>
    </FormControl>
  );
};

export default SelectUI;

const CustomSelect = styled(Select)({
  background: "#262626",
  width: "100%",
  border: "1px solid gray",
  color: "#fff",
  "& .MuiSelect-select": {
    color: "#fff",
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
    color: "#fff",
    "&.Mui-selected": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "#fff",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      },
    },
  },
});

const MenuItemStyle = styled(MenuItem)({
  fill: "#fff",
  "*": {
    fill: "#fff",
  },
});
