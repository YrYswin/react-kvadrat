import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface Props {
  name: string;
  label: string;
  count: number;
  value: number | undefined;
  register: UseFormRegisterReturn;
}

const Selectors: React.FC<Props> = ({ count, register, value, label, name }) => {
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
    <div className="w-[20%]">
      <div className="flex bg-[#C8180C] p-1 items-center justify-center">
        <p className="pt-1 text-xs">{label}</p>
        <img className="ml-2" width={16} src="/svg/Baths.svg" alt="bathroom" />
      </div>
      <div className={`${color} text-white  h-[30px]`}>
        <FormControl sx={{ minWidth: 50, marginLeft: 2 }}>
          <Select
            id="demo-simple-select-autowidth"
            {...(register && name ? register : {})}
            value={value || 0}
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
    </div>
  );
};

export default Selectors;
