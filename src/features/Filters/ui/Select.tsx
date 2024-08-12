import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function SingleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState("");

  function getStyles(name: string, personName: string) {
    return {
      fontWeight: personName === name ? theme.typography.fontWeightMedium : theme.typography.fontWeightRegular,
    };
  }
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setPersonName(event.target.value as string);
  };

  return (
    <div className="">
      <FormControl>
        <Select
          labelId="demo-single-name-label"
          id="demo-single-name"
          value={personName}
          onChange={handleChange}
          MenuProps={MenuProps}
          displayEmpty
          style={{ background: "white", width: "100%" }}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            <p>Выберите местоположение</p>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
