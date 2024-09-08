import React from "react";
import Type from "./Type";
import Container from "../../../shared/helpers/Container";
import ActiveFilter from "./ActiveFilter";
import ClearIcon from "@mui/icons-material/Clear";

const Filters = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Container>
      <div className="flex flex-col w-full gap-3 mt-[30px] md:mt-20 md:flex-row">
        <div className={`lg:block flex-col ${open ? "block" : "hidden"}`}>
          <div className="flex items-center justify-between pb-4 text-white md:hidden">
            <ClearIcon onClick={() => setOpen(!open)} className="cursor-pointer" />
            <h4 className="font-normal cursor-pointer ">Фильтр</h4>
            <p className="cursor-pointer">очистить</p>
          </div>
          <Type open={setOpen}/>
        </div>
        <div className={`w-full ${open ? "hidden" : "block"}`}>
          <ActiveFilter open={setOpen}/>
        </div>
      </div>
    </Container>
  );
};

export default Filters;

// const Filters = () => {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <Container>
//       <div className="flex flex-col w-full gap-3 mt-[30px] md:mt-20 md:flex-row">
//         {/* Type component: скрыт на маленьких экранах и показан на больших */}
//         <div className={`hidden lg:block flex-col ${open ? "block" : "hidden"}`}>
//           <div className="flex items-center justify-between pb-4 text-white md:hidden">
//             <ClearIcon onClick={() => setOpen(!open)} className="cursor-pointer" />
//             <h4 className="font-normal cursor-pointer">Фильтр</h4>
//             <p className="cursor-pointer">Очистить</p>
//           </div>
//           <Type open={setOpen} />
//         </div>

//         {/* ActiveFilter component: показан на маленьких экранах и скрыт на больших */}
//         <div className={`block lg:hidden w-full ${open ? "hidden" : "block"}`}>
//           <ActiveFilter open={setOpen} />
//         </div>
//       </div>
//     </Container>
//   );
// };
