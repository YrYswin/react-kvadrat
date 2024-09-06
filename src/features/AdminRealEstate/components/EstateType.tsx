import { CustomSelect, MenuItemStyle } from "../styles";

interface Props {
  active: string;
  onChange?: (e: string) => void;
}

const EstateType: React.FC<Props> = ({ active, onChange }) => {
  const handleChange = (event: string) => {
    if (onChange) {
      onChange(event);
    }
  };

  const value = active || "";

  return (
    <CustomSelect value={value} onChange={(e) => handleChange(e.target.value)}>
      <MenuItemStyle value="Дома">
        <em>Дома</em>
      </MenuItemStyle>
      <MenuItemStyle value="Квартиры">
        <em>Квартиры</em>
      </MenuItemStyle>
      <MenuItemStyle value="Участки">
        <em>Участки</em>
      </MenuItemStyle>
      <MenuItemStyle value="Коммерческая недвижимость">
        <em>Коммерческая недвижимость</em>
      </MenuItemStyle>
    </CustomSelect>
  );
};

export default EstateType;
