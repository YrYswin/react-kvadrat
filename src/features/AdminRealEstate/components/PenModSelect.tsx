import React, { useState, useEffect } from "react";
import { Adress } from "../../Filters/ui/Type";
import axios from "axios";
import { CustomSelect, MenuItemStyle } from "../styles";

interface Props {
  active: string;
  onChange?: (e: string) => void;
  width?: number;
}
const API = "http://167.172.74.113/addresses/";

const PenModSelect: React.FC<Props> = ({ active, onChange }) => {
  const [address, setAddress] = useState<Adress[]>([]);

  const handleChange = (event: string) => {
    if (onChange) {
      onChange(event);
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
      setAddress([]);
    }
  }

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <CustomSelect value={value} onChange={(e) => handleChange(e.target.value)}>
      {address.map((item, index) => (
        <MenuItemStyle key={index} value={item.region}>
          {item.region}
        </MenuItemStyle>
      ))}
    </CustomSelect>
  );
};

export default PenModSelect;
