import React, { useState } from "react";
import Type from "./Type";
import Container from "../../../shared/helpers/Container";
import ActiveFilter from "./ActiveFilter";
import ClearIcon from "@mui/icons-material/Clear";

const Filters = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <div className="flex flex-col w-full gap-3 md:mt-20 md:flex-row">
        <div className={`md:block flex-col ${open ? "block" : "hidden"}`}>
          <div className="flex items-center justify-between pb-4 text-white md:hidden">
            <ClearIcon
              onClick={() => setOpen(!open)}
              className="cursor-pointer"
            />
            <h4 className="font-normal cursor-pointer ">Фильтр</h4>
            <p className="cursor-pointer">очистить</p>
          </div>
          <Type />
        </div>
        <div className={`md:block w-full ${open ? "hidden" : "block"}`}>
          <ActiveFilter open={setOpen} />
        </div>
      </div>
    </Container>
  );
};

export default Filters;
