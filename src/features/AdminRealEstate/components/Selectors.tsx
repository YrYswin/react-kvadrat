import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import FormControl from "@mui/material/FormControl";
import { Input } from "@mui/material";

interface Props {
  name: string;
  label: string;
  count: number;
  value: number | undefined;
  register: UseFormRegisterReturn;
}

const Selectors: React.FC<Props> = ({ register,label, name }) => {


  const color = name ? "bg-[#292929]" : "bg-[#000000]";
  return (
    <div className="">
      <div className="flex bg-[#C8180C] p-1 items-center justify-center">
        <p className="pt-1 text-xs">{label}</p>
        <img className="ml-2" width={16} src="/svg/Baths.svg" alt="bathroom" />
      </div>
      <div className={`${color} text-white  h-[30px]`}>
        <FormControl sx={{ minWidth: 50, marginLeft: 2, marginRight: 2 }}>
          <Input
            {...(register && name ? register : {})}
            style={{ outline: "none", height: "17px", marginTop: 8 }}
            placeholder="0"
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
          />
        </FormControl>
      </div>
    </div>
  );
};

export default Selectors;
