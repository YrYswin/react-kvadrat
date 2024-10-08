import React from "react";
import { useNavigate } from "react-router-dom";

import CarouselPro from "./CarouselPro";
import { HouseState } from "../../AdminRealEstate/store/types";

const ProductBLock: React.FC<HouseState> = ({ image, price, title, id, square_footage,images }) => {
  const navigate = useNavigate();
  const clickInfo = (id: number) => {
    window.scrollTo(0, 0);
    navigate(`/info/${id}`);
  };
  const imagesArray = [...images.map((image) => image.image), image];
  return (
    <div onClick={() => clickInfo(id)} className="mw-[30cwq] rounded-lg overflow-hidden bg-[#eee] transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="w-[100%]">
        <CarouselPro images={imagesArray} />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className=" text-center font-medium text-[18px]">
          <p className="">{title}</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex justify-center text-center">
            <p>Площадь:</p> <p>{square_footage}(м2)</p>
          </div>
          <div className="flex justify-between text-[14px] md:text-[20px] font-medium px-2">
            <b>Цена:</b>
            <b>$ {price.toString().slice(0, -3)}</b>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-red-700 text-[14px] md:text-[18px] text-white mt-2 px-[40px] md:px-16 py-2 rounded-full hover:bg-red-600 active:bg-red-800"
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
