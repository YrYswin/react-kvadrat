import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";

import { getHeadings } from "./store/action";
import { selectHeadings } from "./store/selectors";

import HeadingsBlock from "./ui/HeadingsBlock";
import AddIcon from "@mui/icons-material/Add";
import PaginateMenu from "../Filters/ui/PaginateMenu";

const AdminHeadings = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState(0);

  const { items, count } = useSelector(selectHeadings);

  React.useEffect(() => {
    dispatch(getHeadings(page));
  }, [dispatch, page]);

  return (
    <div className="h-[80vh] scroll-container-x overflow-auto relative">
      <div className="flex justify-between py-2 px-[50px] md:px-24 text-white sticky top-0 bg-black z-10">
        <div>
          <h1 className="text-sm md:text-3xl">Все объявления</h1>
          <div className="sticky top-4 z-11 text-[7px] md:text-[18px] text-red-700">
            {page === 0 ? page + 1 : page}-{page === 0 ? page + 8 : count <= page ? count : page + 1} из {count} результатов
          </div>
        </div>
        <button
          onClick={() => navigate("/admin/headings/add")}
          className="bg-red-700 text-[8px] md:text-lg px-2 py-2 lg:px-7 lg:py-3 rounded-full flex items-center gap-1 md:gap-3"
        >
          <AddIcon />
          Добавить новое объявление
        </button>
      </div>

      <div className="px-[62px] md:px-24 py-5 flex flex-col gap-5">
        {items?.map((obj, index) => (
          <HeadingsBlock key={index} {...obj} />
        ))}
        <PaginateMenu changePage={setPage} active={page} maxvalue={count} />
      </div>
    </div>
  );
};

export default AdminHeadings;
