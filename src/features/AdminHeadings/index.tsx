import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";

import { getHeadings } from "./store/action";
import { selectHeadings } from "./store/selectors";

import HeadingsBlock from "./ui/HeadingsBlock";
import AddIcon from "@mui/icons-material/Add";

const AdminHeadings = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { items } = useSelector(selectHeadings);

  React.useEffect(() => {
    dispatch(getHeadings());
  }, [dispatch]);
  return (
    <div className="h-[80vh] scroll-container-x overflow-auto relative">
      <div className="flex justify-between py-2 px-24 text-white sticky top-0 bg-black z-10">
        <h1 className="text-3xl">Все объявления</h1>
        <button
          onClick={() => navigate("/admin/headings/add")}
          className="bg-red-700 px-7 py-3 rounded-full flex items-center gap-3"
        >
          <AddIcon />
          Добавить новое объявление
        </button>
      </div>
      <div className="px-24 py-5 flex flex-col gap-5">
        {items?.map((obj, index) => (
          <HeadingsBlock key={index} {...obj} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default AdminHeadings;
