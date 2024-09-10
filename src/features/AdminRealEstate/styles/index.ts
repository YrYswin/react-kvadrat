import { styled } from "@mui/material";

export const CustomSelect = styled("select")({
  flex: 1,
  background: "#262626",
  border: "1px solid gray",
  padding: "5px",
  borderRadius: "5px",
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
      backgroundColor: "red",
      color: "#fff",
      "&:hover": {
        backgroundColor: "red",
      },
    },
  },
});

export const MenuItemStyle = styled("option")({
  fill: "#fff",
  "*": {
    fill: "#fff",
  },
});
