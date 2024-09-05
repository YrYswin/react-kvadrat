import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";

interface Props {
  active: string;
  onChange?: (e: string) => void;
  width?: number;
}

const EstateType: React.FC<Props> = ({ active, onChange, width }) => {

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    if (onChange) {
      onChange(event.target.value as string);
    }
  };

  const value = active || "";

  return (
    <FormControl sx={{ width: width || 290, height: 30 }}>
      <CustomSelect
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        size="small"
      >
        <MenuItemStyle value="">
          <em>Выберите тип недвижимости</em>
        </MenuItemStyle>
        <MenuItemStyle value="Houses">
          <em>Дома</em>
        </MenuItemStyle>
        <MenuItemStyle value="Apartments">
          <em>Квартиры</em>
        </MenuItemStyle>
        <MenuItemStyle value="Land">
          <em>Участки</em>
        </MenuItemStyle>
        <MenuItemStyle value="Commercial">
          <em>Коммерческая недвижимость</em>
        </MenuItemStyle>
      </CustomSelect>
    </FormControl>
  );
};

export default EstateType;

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
