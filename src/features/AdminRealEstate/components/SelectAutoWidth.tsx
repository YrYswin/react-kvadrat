import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectAutoWidth({
  count,
  register,
  name,
  defaultValue,
}) {
  const renderMenuItems = () => {
    const items = [];
    for (let i = 0; i <= count; i++) {
      items.push(
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }
    return items;
  };

  const color = name ? "bg-[#292929]" : "bg-[#000000]";

  return (
    <div className={`${color} text-white  h-[30px]`}>
      <FormControl sx={{ minWidth: 50, marginLeft: 2 }}>
        <Select
          id="demo-simple-select-autowidth"
          {...(register && name ? register(name) : {})}
          defaultValue={defaultValue || 0}
          autoWidth
          style={{ outline: "none", height: "17px", marginTop: 8 }}
          sx={{
            color: "white",
            ".MuiSvgIcon-root": { color: "white" },
            ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            ".MuiList-root": {
              backgroundColor: "#292929",
            },
            ".MuiMenuItem-root": {
              color: "white",
            },
          }}
          displayEmpty
        >
          {renderMenuItems()}
        </Select>
      </FormControl>
    </div>
  );
}
