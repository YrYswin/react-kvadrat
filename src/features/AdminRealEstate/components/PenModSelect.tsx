import React,{useState, useEffect} from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { Adress } from "../../Filters/ui/Type";
import axios from "axios";

interface Props {
  active: string;
  onChange?: (e: string) => void;
  width?: number;
}
const API = "http://167.172.74.113/addresses/";

const PenModSelect: React.FC<Props> = ({ active, onChange, width, }) => {
  const [address, setAddress] = useState<Adress[]>([]);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    if (onChange) {
      onChange(event.target.value as string);
    }
  };

  const value = active || "None";

  async function getAddress(): Promise<void> {
    try {
      const res = await axios.get<{ results: Adress[] }>(API);
      if (Array.isArray(res.data.results)) {
        setAddress(res.data.results);
      } else {
        console.error("Unexpected data format", res.data);
        setAddress([]);
      }
    } catch (error) {
      console.log(error);
      setAddress([]); // Обработка ошибок
    }
  }

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <FormControl sx={{ width: width || 290, height: 30 }}>
        <CustomSelect
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        size="small"
        >
        <MenuItemStyle value="None">
            <em>Выберите Местоположение</em>
        </MenuItemStyle>
        {address.map((item,) => (
            <MenuItemStyle key={item.id} value={item.region}>
            {item.region}
            </MenuItemStyle>
        ))}
        </CustomSelect>
    </FormControl>
  );
};

export default PenModSelect;

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
      backgroundColor: "red",
      color: "#fff",
      "&:hover": {
        backgroundColor: "red",
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
