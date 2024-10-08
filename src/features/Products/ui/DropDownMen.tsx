import { useEffect, useRef, useState } from "react";
import ExpandMoreTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

interface Props {
  category: string;
  setCat: (e: string) => void;
}

const DropDownMen: React.FC<Props> = ({ category, setCat }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const options = ["Все", "Дома", "Квартиры", "Коммерческое недвижимость", "Участки"];
  const [open, setOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const path = event.composedPath ? event.composedPath() : (event as any).path;
      if (path && !path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={sortRef} className="flex flex-col items-center gap-1 relative">
      <div
        onClick={() => setOpen(!open)}
        className={`flex items-center justify-between w-[250px] md:w-[283px] rounded-full py-2 px-2 sm:px-4 md:px-5 lg:px-7 bg-red-600 text-white cursor-pointer`}
      >
        <p className={`${category === "Коммерческое недвижимость" ? "text-sm" : "text-md"}`}>{category || "Категории"}</p>
        {open ? <ExpandMoreTwoToneIcon className="text-black" /> : <ExpandMoreSharpIcon />}
      </div>
      {open && (
        <div className="flex flex-col flex-wrap lg:w-[283px] w-[150px] sm:w-[200px] md:w-[250px] absolute z-10 mt-[45px] items-start bg-red-600 rounded-lg">
          {options.map((item, index) => (
            <p
              key={index}
              onClick={() => {
                setCat(item === "Все" ? "" : item); // Если выбрано "Все", устанавливаем пустую строку
                setOpen(false);
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-full py-3 px-4 rounded-lg cursor-pointer ${
                item === category || (item === "Все" && category === "")
                  ? "bg-white text-black"
                  : hoveredIndex === index
                  ? "bg-gray-200 text-black"
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
};

export default DropDownMen;
