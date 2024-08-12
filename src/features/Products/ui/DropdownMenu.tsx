import React, { useState } from "react";
import { Menu, MenuItem, Button, styled } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CustomButton = styled(Button)<{ selected: boolean }>(({ selected }) => ({
  backgroundColor: selected ? "#ffffff" : "#C8180C",
  color: selected ? "#000000" : "#fff",
  borderRadius: "42px",
  "&:hover": {
    backgroundColor: "#ff0000",
  },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#C8180C",
    color: "#ffffff",
  },
}));

const CustomMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderBottomLeftRadius: "42px",
    borderBottomRightRadius: "42px",
  },
}));

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelected(!selected);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelected(false);
  };

  return (
    <div>
      <CustomButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        endIcon={<ArrowDropDownIcon />}
        selected={selected}
      >
        Категории
      </CustomButton>
      <CustomMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <CustomMenuItem onClick={handleClose}>Дома</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>Квартиры</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>Коммерческое недвижимость</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>Квартиры</CustomMenuItem>
        <CustomMenuItem onClick={handleClose}>Участки</CustomMenuItem>
      </CustomMenu>
    </div>
  );
};
export default DropdownMenu;
