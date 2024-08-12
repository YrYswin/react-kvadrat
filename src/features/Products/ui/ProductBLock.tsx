import React from "react";
import { useNavigate } from "react-router-dom";

import CarouselPro from "./CarouselPro";
import { HouseState } from "../../AdminRealEstate/store/types";

const ProductBLock: React.FC<HouseState> = ({ image: imageUrl, price, title, id }) => {
  const navigate = useNavigate();
  const clickInfo = (id: number) => {
    window.scrollTo(0, 0);
    navigate(`/info/${id}`);
  };
  return (
    <div className="mw-[30cwq]  rounded-lg overflow-hidden bg-[#eee]">
      <div className="w-[100%]">
        <CarouselPro images={Array(4).fill(imageUrl)} />
      </div>
      <div className="p-2 flex flex-col gap-7">
        <p className="font-bold text-lg">{title}</p>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <b>Площадь:</b> <b>190(м2)</b>
          </div>
          <div className="flex justify-between">
            <b>Цена:</b>
            <b>$ {price}</b>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-red-700 text-lg text-white mt-2 px-16 py-2 rounded-full hover:bg-red-600 active:bg-red-800"
            onClick={() => clickInfo(id)}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBLock;
