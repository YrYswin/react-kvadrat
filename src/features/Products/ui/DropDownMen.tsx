import React, { useEffect, useRef, useState } from "react";
import ExpandMoreTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

function DropDownMen() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selName, setSelName] = useState("");
  const sortRef = useRef();
  const options = ["Дома", "Квартиры", "Коммерческое недвижимость", "Участки"];

  const handleName = (name, index) => {
    setSelName(name);
    setSelectedIndex(index);
    setOpen(false);
  };

  useEffect(() => {
    const handleClick = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (path && !path.includes(sortRef.current)) {
        setOpen(false);
        console.log("click outside");
      }
    };

    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={sortRef} className="flex flex-col items-center gap-1">
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-[150px] sm:w-[200px] md:w-[250px] lg:w-[283px] rounded-full py-2 px-2 sm:px-4 md:px-5 lg:px-7 ${
          open ? "bg-red-600 text-white" : "bg-red-600 text-white"
        }`}
      >
        <p className={`${selName === "Коммерческое недвижимость" ? "text-sm" : "text-md"}`}>
          {selName || "Категории"}
        </p>
        {open ? (
          <ExpandMoreTwoToneIcon className="text-black" />
        ) : (
          <ExpandMoreSharpIcon />
        )}
      </div>
      {open && (
        <div className="flex flex-col flex-wrap lg:w-[283px] w-[150px] sm:w-[200px] md:w-[250px] absolute z-10 mt-[45px] items-start bg-red-600 rounded-lg">
          {options.map((item, index) => (
            <p
              key={index}
              onClick={() => handleName(item, index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-full py-3 px-4 rounded-lg  ${
                index === selectedIndex
                  ? "bg-white text-black"
                  : index === hoveredIndex
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownMen;
