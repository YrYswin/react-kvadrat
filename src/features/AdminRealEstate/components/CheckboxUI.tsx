import React from "react";

interface Props {
  name: string;
  title: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDoubleOne?: boolean;
  isDoubleTwo?: boolean;
}

const CustomCheckbox: React.FC<Props> = ({ name, title, checked, onChange, isDoubleOne, isDoubleTwo }) => {
  const checkboxRef = React.useRef<HTMLInputElement>(null);
  const checkedStyle = `flex items-center text-sm ${checked ? "bg-green-700" : "bg-[#262626]"} ${
    isDoubleOne && "col-start-1 col-end-3"
  } ${isDoubleTwo && "col-start-3 col-end-5"}`;

  const handleClick = () => {
    checkboxRef.current?.click();
  };

  return (
    <div
      className={checkedStyle}
      onClick={handleClick}
      style={{
        cursor: "pointer",
        padding: "5px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        transition: "all 0.3s ease",
      }}
    >
      <input name={name} type="checkbox" checked={checked} onChange={onChange} ref={checkboxRef} style={{ display: "none" }} />
      <span className="select-none">{title}</span>
    </div>
  );
};

export default CustomCheckbox;
