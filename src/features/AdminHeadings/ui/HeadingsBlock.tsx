import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";

import { HeadingState } from "../store/types";

const HeadingsBlock: React.FC<HeadingState> = ({ id, image, title }) => {
  const navigate = useNavigate();

  const clickEdit = () => {
    navigate(`/admin/headings/edit/${id}`);
  };
  const clickDelete = () => {
    navigate(`/admin/headings/delete/${id}`);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:gap-10 gap-5">
      <div className="w-full md:w-[75%] h-[300px] md:h-[450px] relative overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="back" />
        <Overlay />
        <div className="absolute bottom-5 left-5 md:bottom-10 md:left-10 w-full flex flex-col gap-5 md:gap-10">
          <h1 className="text-[24px] md:text-[45px] w-[90%] md:w-[70%] text-white">{title}</h1>
          <div className="w-full md:w-[90%]">
          </div>
        </div>
      </div>
      <div className="bg-[#262626] flex items-center rounded-full overflow-hidden">
        <button
          className="hover:bg-gray-700 group flex justify-center items-center"
          onClick={clickEdit}
        >
          <img
            className="my-4 mx-5 md:mx-7 group-hover:scale-125 duration-200"
            src="/svg/pen.svg"
            alt="pen"
          />
        </button>
        <div className="w-[2px] py-4 bg-gray-300" />
        <button
          className="hover:bg-gray-700 group flex justify-center items-center"
          onClick={clickDelete}
        >
          <img
            className="my-4 mx-5 md:mx-7 group-hover:scale-125 duration-200"
            src="/svg/trash.svg"
            alt="trash"
          />
        </button>
      </div>
    </div>
  );
};

export default HeadingsBlock;

const Overlay = styled("div")({
  position: "absolute",
  inset: 0,
  background: "radial-gradient(ellipse farthest-corner at center, rgba(0,0,0,0) 20%, rgba(0,0,0,0.9) 95%)",
  opacity: 0.5,
});
