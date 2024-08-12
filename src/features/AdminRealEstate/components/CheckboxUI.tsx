import React from "react";

const CustomCheckbox = ({ name, title, checked, onChange }) => {
  const checkboxRef = React.useRef(null);
  const checkedStyle = `flex items-center text-sm ${
    checked ? "bg-green-700" : "bg-[#262626]"
  }`;

  const handleClick = () => {
    checkboxRef.current.click();
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
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        ref={checkboxRef}
        style={{ display: "none" }}
      />
      <span className="select-none">{title}</span>
    </div>
  );
};

export default CustomCheckbox;
